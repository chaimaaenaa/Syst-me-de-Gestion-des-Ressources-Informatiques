package com.itsolutions.Controleur;

import com.itsolutions.Entite.Panne;
import com.itsolutions.Service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pannes")
public class PanneController {

    @Autowired
    private PanneService panneService;

    @GetMapping
    public List<Panne> getAllPannes() {
        return panneService.getAllPannes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Panne> getPanneById(@PathVariable Long id) {
        return panneService.getPanneById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Panne createPanne(@RequestBody Panne panne) {
        return panneService.savePanne(panne);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Panne> updatePanne(@PathVariable Long id, @RequestBody Panne panne) {
        return panneService.getPanneById(id)
                .map(existingPanne -> {
                    panne.setId(id);
                    return ResponseEntity.ok(panneService.savePanne(panne));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePanne(@PathVariable Long id) {
        if (panneService.getPanneById(id).isPresent()) {
            panneService.deletePanne(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

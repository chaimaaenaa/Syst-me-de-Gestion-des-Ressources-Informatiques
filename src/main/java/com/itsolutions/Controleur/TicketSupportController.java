package com.itsolutions.Controleur;

import com.itsolutions.Entite.TicketSupport;
import com.itsolutions.Service.TicketSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketSupportController {

    @Autowired
    private TicketSupportService ticketSupportService;

    @GetMapping
    public List<TicketSupport> getAllTickets() {
        return ticketSupportService.getAllTickets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TicketSupport> getTicketById(@PathVariable Long id) {
        return ticketSupportService.getTicketById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public TicketSupport createTicket(@RequestBody TicketSupport ticketSupport) {
        return ticketSupportService.saveTicket(ticketSupport);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketSupport> updateTicket(@PathVariable Long id, @RequestBody TicketSupport ticketSupport) {
        return ticketSupportService.getTicketById(id)
                .map(existingTicket -> {
                    ticketSupport.setId(id);
                    return ResponseEntity.ok(ticketSupportService.saveTicket(ticketSupport));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        if (ticketSupportService.getTicketById(id).isPresent()) {
            ticketSupportService.deleteTicket(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

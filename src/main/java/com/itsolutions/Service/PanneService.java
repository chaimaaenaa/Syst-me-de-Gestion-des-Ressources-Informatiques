package com.itsolutions.Service;

import com.itsolutions.Entite.Panne;
import com.itsolutions.Repository.PanneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PanneService {

    @Autowired
    private PanneRepository panneRepository;

    public List<Panne> getAllPannes() {
        return panneRepository.findAll();
    }

    public Optional<Panne> getPanneById(Long id) {
        return panneRepository.findById(id);
    }

    public Panne savePanne(Panne panne) {
        return panneRepository.save(panne);
    }

    public void deletePanne(Long id) {
        panneRepository.deleteById(id);
    }
}

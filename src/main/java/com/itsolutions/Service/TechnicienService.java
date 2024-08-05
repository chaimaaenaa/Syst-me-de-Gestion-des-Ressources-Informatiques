package com.itsolutions.Service;

import com.itsolutions.Entite.Technicien;
import com.itsolutions.Repository.TechnicienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TechnicienService {

    @Autowired
    private TechnicienRepository technicienRepository;

    public List<Technicien> getAllTechniciens() {
        return technicienRepository.findAll();
    }

    public Optional<Technicien> getTechnicienById(Long id) {
        return technicienRepository.findById(id);
    }

    public Technicien saveTechnicien(Technicien technicien) {
        return technicienRepository.save(technicien);
    }

    public void deleteTechnicien(Long id) {
        technicienRepository.deleteById(id);
    }
}

package com.itsolutions.Service;

import com.itsolutions.Entite.Role;
import com.itsolutions.Entite.Utilisateur;
import com.itsolutions.Repository.UtilisateurRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

//import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "admin123";
    private static final String ADMIN_EMAIL = "admin@example.com";

    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    public Optional<Utilisateur> getUtilisateurById(Long id) {
        return utilisateurRepository.findById(id);
    }

    public Utilisateur saveUtilisateur(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    public void deleteUtilisateur(Long id) {
        utilisateurRepository.deleteById(id);
    }

    @PostConstruct
    public void createAdminUserIfNotExist() {
        if (utilisateurRepository.findByUsername(ADMIN_USERNAME).isEmpty()) {
            Utilisateur admin = new Utilisateur();
            admin.setUsername(ADMIN_USERNAME);
            admin.setPassword(passwordEncoder.encode(ADMIN_PASSWORD));
            admin.setEmail(ADMIN_EMAIL);
            utilisateurRepository.save(admin);
        }
    }
}

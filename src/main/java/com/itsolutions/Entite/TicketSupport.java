package com.itsolutions.Entite;

import com.itsolutions.enums.TicketStatus;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class TicketSupport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private Date dateCréation;

    @Enumerated(EnumType.STRING)
    private TicketStatus etat;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "technicien_id")
    private Technicien technicien;

    public void setId(Long id) {
    }

    // Getters and Setters
}

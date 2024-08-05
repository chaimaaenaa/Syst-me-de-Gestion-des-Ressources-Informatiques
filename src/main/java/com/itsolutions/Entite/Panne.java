package com.itsolutions.Entite;

import com.itsolutions.enums.PanneStatus;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Panne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private Date dateSignalement;

    @Enumerated(EnumType.STRING)
    private PanneStatus etat;

    @ManyToOne
    @JoinColumn(name = "equipment_id")
    private Equipment equipment;

    public void setId(Long id) {

    }

    // Getters and Setters
}

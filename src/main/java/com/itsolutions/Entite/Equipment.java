package com.itsolutions.Entite;

import com.itsolutions.enums.EquipmentStatus;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String type;

    @Enumerated(EnumType.STRING)
    private EquipmentStatus etat;

    private Date dateAcquisition;

    @OneToMany(mappedBy = "equipment")
    private List<Panne> pannes;

    public void setId(Long id) {
    }

    // Getters and Setters
}

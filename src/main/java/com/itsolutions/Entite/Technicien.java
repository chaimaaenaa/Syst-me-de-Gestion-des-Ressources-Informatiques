package com.itsolutions.Entite;

import jakarta.persistence.Entity;

@Entity
public class Technicien extends BaseEntity {
    private String name;
    private String specialty;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }
}

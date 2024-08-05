package com.itsolutions.Entite;

import com.itsolutions.Entite.Utilisateur;
import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Décommentez cette ligne si vous utilisez une base de données qui supporte l'auto-incrémentation
    private Long id;

    private String nom;

    @ManyToMany(mappedBy = "roles")
    private Set<Utilisateur> utilisateurs;

    public Role() {}

    public Role(String nom) {
        this.nom = nom;
    }

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Set<Utilisateur> getUtilisateurs() {
        return utilisateurs;
    }

    public void setUtilisateurs(Set<Utilisateur> utilisateurs) {
        this.utilisateurs = utilisateurs;
    }
}

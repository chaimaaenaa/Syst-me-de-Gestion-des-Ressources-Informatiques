package com.itsolutions.equipment_management.repositories;

import com.itsolutions.equipment_management.models.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    List<Equipment> findByNom(String nom);
}

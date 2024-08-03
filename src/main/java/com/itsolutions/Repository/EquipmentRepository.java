package com.itsolutions.Repository;

import com.itsolutions.Entite.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
}

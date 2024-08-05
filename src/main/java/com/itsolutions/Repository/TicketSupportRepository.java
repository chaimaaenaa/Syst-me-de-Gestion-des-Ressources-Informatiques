package com.itsolutions.Repository;

import com.itsolutions.Entite.TicketSupport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketSupportRepository extends JpaRepository<TicketSupport, Long> {
}

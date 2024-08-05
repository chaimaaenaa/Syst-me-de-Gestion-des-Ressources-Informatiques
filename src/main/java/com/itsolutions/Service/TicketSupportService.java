package com.itsolutions.Service;

import com.itsolutions.Entite.TicketSupport;
import com.itsolutions.Repository.TicketSupportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketSupportService {

    @Autowired
    private TicketSupportRepository ticketSupportRepository;

    public List<TicketSupport> getAllTickets() {
        return ticketSupportRepository.findAll();
    }

    public Optional<TicketSupport> getTicketById(Long id) {
        return ticketSupportRepository.findById(id);
    }

    public TicketSupport saveTicket(TicketSupport ticketSupport) {
        return ticketSupportRepository.save(ticketSupport);
    }

    public void deleteTicket(Long id) {
        ticketSupportRepository.deleteById(id);
    }
}

package ProiectJava.demo.controller;

import ProiectJava.demo.entity.Crew;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ProiectJava.demo.repository.CrewRepository;

import java.util.List;

@RestController
@RequestMapping("/api/crews")
@CrossOrigin(origins = "http://localhost:5173")
@Controller
public class CrewWebController {

    @Autowired
    CrewRepository crewRepository;

    @GetMapping("/Crew-list")
    public List<Crew> getCrewList() {
        return crewRepository.findAll();
    }
    @PostMapping
    public Crew addCrew(@RequestBody Crew crew){
        return crewRepository.save(crew);
    }
}

package ProiectJava.demo.controller;
import ProiectJava.demo.Service.CharactersService;
import ProiectJava.demo.entity.Crew;
import ProiectJava.demo.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ProiectJava.demo.entity.Characters;

import java.util.List;

@RestController
@RequestMapping("/api/characters")
@CrossOrigin(origins = "http://localhost:5173")

public class CharactersWebController {

    @Autowired private
    CharactersService charactersService;

    @GetMapping("/Characters-list")
    public List<Characters> getCharactersList() {
        return charactersService.getAllCharacters();
    }
    @PostMapping("/add")
    public Characters addCharacters(@RequestBody Characters characterPrimit){
        return charactersService.saveCharacter(characterPrimit);
    }
}

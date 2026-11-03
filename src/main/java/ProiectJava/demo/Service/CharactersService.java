package ProiectJava.demo.Service;
import ProiectJava.demo.entity.Characters;
import ProiectJava.demo.repository.CharacterRepository;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class CharactersService {
    private final CharacterRepository characterRepository;
    public CharactersService(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }
    public List<Characters> getAllCharacters(){
        return characterRepository.findAll();
    }


    public Characters saveCharacter(Characters personajNou) {
            return characterRepository.save(personajNou);
    }

}


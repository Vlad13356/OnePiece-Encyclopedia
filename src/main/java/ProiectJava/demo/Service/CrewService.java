package ProiectJava.demo.Service;
import ProiectJava.demo.entity.Crew;
import ProiectJava.demo.repository.CrewRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CrewService {
    private final CrewRepository crewRepository;

    public CrewService(CrewRepository crewRepository) {
        this.crewRepository = crewRepository;
    }

    public List<Crew> GetAllCrews(){
        return crewRepository.findAll();
    }
}

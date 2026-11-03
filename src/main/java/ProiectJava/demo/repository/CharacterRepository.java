package ProiectJava.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import ProiectJava.demo.entity.Characters;
public interface CharacterRepository extends JpaRepository<Characters, Long>{}

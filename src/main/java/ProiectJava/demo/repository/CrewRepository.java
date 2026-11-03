package ProiectJava.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ProiectJava.demo.entity.Crew;


public interface CrewRepository extends JpaRepository<Crew, Integer> { }

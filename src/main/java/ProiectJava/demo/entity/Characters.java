package ProiectJava.demo.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

@Data
@Entity
@Table(name = "characters")
public class Characters {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCharacters;
    private String name;
    private String role;
    private String devilfruit;
    private Long bounty;

    @ManyToOne
    @JoinColumn(name = "crew_id") // Numele coloanei din tabelul MySQL
    private Crew crew;
}

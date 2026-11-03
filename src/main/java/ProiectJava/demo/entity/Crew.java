package ProiectJava.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Crews")
public class Crew {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCrew;
    private String name;
    private long Bounty;
    private String Ship;
    private String Captain;
    @OneToMany(mappedBy = "crew", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Characters> characters;

}

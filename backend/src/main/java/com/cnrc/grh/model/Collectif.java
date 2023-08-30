
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import com.cnrc.grh.model.Employe; // Import the Employee model

@Entity
public class Collectif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String collectiveName;

    // Other fields

    @OneToMany(mappedBy = "collective") // One-to-Many relationship with Employee
    private List<Employee> employees;   // Optional: To access employees from the collective

    // Constructors, getters, setters
}

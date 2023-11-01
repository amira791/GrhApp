package com.cnrc.grh.service.dossierEmploye;

import com.cnrc.grh.Request.AlreadyExistsException;
import com.cnrc.grh.model.dossierEmploye.Contrat;
import com.cnrc.grh.model.dossierEmploye.EmplTemp;
import com.cnrc.grh.model.dossierEmploye.MotifContrat;
import com.cnrc.grh.model.dossierEmploye.TypeContrat;
import com.cnrc.grh.repository.EmployeRepository;
import com.cnrc.grh.repository.dossierEmploye.ContratRepository;
import com.cnrc.grh.repository.dossierEmploye.MotifContratRepository;
import com.cnrc.grh.repository.dossierEmploye.TypeContratRepository;
import com.cnrc.grh.repository.dossierEmploye.EmpTempRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.FileInputStream;
import java.io.FileOutputStream;


import java.util.List;

@Service
public class ContratService {
    private final ContratRepository contratRepository;
    private final TypeContratRepository typeContratRepository;

    private final MotifContratRepository motifContratRepository;

    private final EmpTempRepository emplTempRepository;

    @Autowired
    public ContratService(ContratRepository contratRepository ,
                          TypeContratRepository typeContratRepository ,
                          MotifContratRepository motifContratRepository ,
                          EmpTempRepository emplTempRepository) {
        this.contratRepository = contratRepository;
        this.typeContratRepository = typeContratRepository;
        this.motifContratRepository = motifContratRepository;
        this.emplTempRepository = emplTempRepository;
    }

//    // gestion des motifs de contrat
//
//    public List<MotifContrat> getMotifContratList() {return motifContratRepository.findAll();}
//
//    public MotifContrat getMotifContratById(String id) {return motifContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Motif de contrat non trouvé"));}
//
//    public void createMotifContrat(MotifContrat motif) {
//        if(motifContratRepository.existsById(motif.getId())) {
//            throw new AlreadyExistsException("le type de contrat existe deja ");
//        }
//        else motifContratRepository.save(motif);
//    }
//
//    public void updateMotifContrat(String id, MotifContrat updatedMotifContrat) {
//        MotifContrat oldMotifContrat = motifContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));
//        oldMotifContrat.setLibelle(updatedMotifContrat.getLibelle());
//        oldMotifContrat.setLibelleAr(updatedMotifContrat.getLibelleAr());
//        motifContratRepository.save(oldMotifContrat);
//    }
//    public void deleteMotifContrat(String id) {
//        if (motifContratRepository.existsById(id)) {
//            motifContratRepository.deleteById(id);
//        }else throw new RuntimeException("Motif de contrat non trouv");
//
//    }

    // gestion des types de contrats
    public List<TypeContrat> getTypeContratList() {return typeContratRepository.findAll();}

    public TypeContrat getTypeContratById(String id) {return typeContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));}

    public void createTypeContrat(TypeContrat type) {
        if(typeContratRepository.existsById(type.getId())) {
           throw new AlreadyExistsException("le type de contrat existe deja ");
        }
        else typeContratRepository.save(type);
    }
    public void updateTypeContrat(String id, TypeContrat updatedTypeContrat) {
        TypeContrat typeContrat = typeContratRepository.findById(id).orElseThrow(() -> new RuntimeException("Type de contrat non trouvé"));
        typeContrat.setLibelle(updatedTypeContrat.getLibelle());
        typeContrat.setLibelleAr(updatedTypeContrat.getLibelleAr());
        typeContrat.setNature(updatedTypeContrat.getNature());
        typeContratRepository.save(typeContrat);
    }
    public void deleteTypeContrat(String id) {

        if (typeContratRepository.existsById(id)) typeContratRepository.deleteById(id);
        else throw new RuntimeException("Type de contrat non trouvé");
    }

    // gestion des contrats
    public List<Contrat> getContratList() {return contratRepository.findAll();}

    public Contrat getContratById(String id) {return contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));}

    public void createContrat(Contrat contrat) {
        if(contratRepository.existsById(contrat.getId())){
            throw new AlreadyExistsException("Le contrat avec l'id :" + contrat.getId() +"existe deja");
        }
        else {
            EmplTemp employe = new EmplTemp();
            employe.setMatricule(contrat.getEmplTemp().getMatricule());
            employe.setNom(contrat.getEmplTemp().getNom());
            employe.setPrenom(contrat.getEmplTemp().getPrenom());
            emplTempRepository.save(employe);
            contratRepository.save(contrat);
        }}

    public void updateContrat(String id , Contrat updatedContrat) {
        Contrat contrat = contratRepository.findById(id).orElseThrow(() -> new RuntimeException("Contrat non trouvé"));
        contrat.setDateDebut(updatedContrat.getDateDebut());
        contrat.setDateFin(updatedContrat.getDateFin());
        contrat.setDuree(updatedContrat.getDuree());
        contrat.setType(updatedContrat.getType());
        // contrat.setMotif(updatedContrat.getMotif());
        contratRepository.save(contrat);
    }


//   public  void imprimerContrat (){
//
//           public static void generateDocument() {
//               try {
//                   FileInputStream templateFile = new FileInputStream("template.docx");
//                   XWPFDocument document = new XWPFDocument(templateFile);
//
//                   // Access a paragraph in the document
//                   XWPFParagraph paragraph = document.getParagraphs().get(0);
//
//                   // Access the run within the paragraph
//                   XWPFRun run = paragraph.createRun();
//
//                   // Set the text for the run
//                   run.setText("Dynamic Content");
//
//                   // Save the modified document
//                   FileOutputStream output = new FileOutputStream("generated.docx");
//                   document.write(output);
//                   output.close();
//                   templateFile.close();
//               } catch (Exception e) {
//                   e.printStackTrace();
//               }
//           }
//
//       }


   }


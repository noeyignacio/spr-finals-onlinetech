package finalproject.onlinetech.backend.controller;

import finalproject.onlinetech.backend.domain.Genre;
import finalproject.onlinetech.backend.services.GenreService;
import finalproject.onlinetech.backend.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/genre")
@CrossOrigin
public class GenreController {

    @Autowired
    private GenreService genreService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewGenre(
            @Valid
            @RequestBody Genre genre,
            BindingResult result
    ) {

        // Validation
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap!=null)
            return errorMap;

        Genre genre1 = genreService.saveOrUpdateGenre(genre);
        return new ResponseEntity<Genre>(genre, HttpStatus.CREATED);
    }

    @GetMapping("/{genreId}")
    public ResponseEntity<?> getGenreById(@PathVariable String genreId) {

        Genre genre = genreService.findGenreByIdentifier(genreId);

        return new ResponseEntity<Genre>(genre, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Genre> getAllGenre() {
        return genreService.findAllGenre();
    }


    @DeleteMapping("/{genreId}")
    public ResponseEntity<?> deleteGenre(@PathVariable String genreId) {
        genreService.deleteGenreByIdentifier(genreId);

        return new ResponseEntity<String>("Genre with ID: " + genreId + "was deleted.", HttpStatus.OK);

    }

}

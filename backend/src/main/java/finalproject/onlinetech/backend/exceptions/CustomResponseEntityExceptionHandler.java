package finalproject.onlinetech.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handleGenreIdException(GenreIdException ex, WebRequest request) {
        GenreIdExceptionResponse genreIdExceptionResponse = new GenreIdExceptionResponse(ex.getMessage());
        return new ResponseEntity(genreIdExceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleBookNotFoundException(GenreNotFoundException ex, WebRequest request) {
        GenreNotFoundExceptionResponse genreNotFoundExceptionResponse = new GenreNotFoundExceptionResponse(ex.getMessage());
        return new ResponseEntity(genreNotFoundExceptionResponse, HttpStatus.BAD_REQUEST);
    }
}

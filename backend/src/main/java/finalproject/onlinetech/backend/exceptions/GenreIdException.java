package finalproject.onlinetech.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class GenreIdException extends RuntimeException {

    public GenreIdException(String message) {
        super(message);
    }
}

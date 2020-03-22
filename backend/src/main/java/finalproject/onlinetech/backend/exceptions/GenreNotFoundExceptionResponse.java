package finalproject.onlinetech.backend.exceptions;

public class GenreNotFoundExceptionResponse {

    private String GenreNotFound;

    public GenreNotFoundExceptionResponse(String genreNotFound) {
        GenreNotFound = genreNotFound;
    }

    public String getGenreNotFound() {
        return GenreNotFound;
    }

    public void setGenreNotFound(String genreNotFound) {
        GenreNotFound = genreNotFound;
    }
}

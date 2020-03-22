package finalproject.onlinetech.backend.exceptions;

public class GenreIdExceptionResponse {

    private String genreIdentifier;

    public GenreIdExceptionResponse(String genreIdentifier) {
        this.genreIdentifier = genreIdentifier;
    }

    public String getGenreIdentifier() {
        return genreIdentifier;
    }

    public void setGenreIdentifier(String genreIdentifier) {
        this.genreIdentifier = genreIdentifier;
    }
}

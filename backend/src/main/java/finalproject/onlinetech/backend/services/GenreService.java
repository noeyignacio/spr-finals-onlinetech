package finalproject.onlinetech.backend.services;

import finalproject.onlinetech.backend.domain.Backlog;
import finalproject.onlinetech.backend.domain.Genre;
import finalproject.onlinetech.backend.exceptions.GenreIdException;
import finalproject.onlinetech.backend.repository.BacklogRepository;
import finalproject.onlinetech.backend.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Genre saveOrUpdateGenre(Genre genre) {

        // Logic
        try {
            genre.setGenreIdentifier(genre.getGenreIdentifier().toUpperCase());

            if(genre.getId() == null) {
                Backlog backlog = new Backlog();
                genre.setBacklog(backlog);
                backlog.setGenre(genre);
                backlog.setGenreIdentifier(genre.getGenreIdentifier().toUpperCase());
            }

            if(genre.getId() != null) {
                genre.setBacklog(backlogRepository.findByGenreIdentifier(genre.getGenreIdentifier().toUpperCase()));
            }

            return genreRepository.save(genre);
        } catch (Exception e) {
            throw new GenreIdException("Genre ID: " + genre.getGenreIdentifier().toUpperCase() + " already exist.");
        }

    }

    public Genre findGenreByIdentifier(String genreId){

        Genre genre = genreRepository.findByGenreIdentifier(genreId.toUpperCase());

        if( genre == null) {
            throw new GenreIdException("Genre ID: "+ genreId +" does not exist.");
        }

        return genre;
    }

    public Iterable<Genre> findAllGenre() {
        return genreRepository.findAll();
    }

    public void deleteGenreByIdentifier(String genreId) {
        Genre genre = genreRepository.findByGenreIdentifier(genreId.toUpperCase());

        if (genre == null) {
            throw new GenreIdException("Cannot delete Genre with ID: "+ genreId +". This genre does not exist.");
        }

        genreRepository.delete(genre);
    }
}

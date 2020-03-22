package finalproject.onlinetech.backend.repository;

import finalproject.onlinetech.backend.domain.Genre;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends CrudRepository<Genre, Long> {

    Genre findByGenreIdentifier(String genreId);

    @Override
    Iterable<Genre> findAll();


}

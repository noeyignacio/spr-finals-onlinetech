package finalproject.onlinetech.backend.repository;

import finalproject.onlinetech.backend.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {

    Backlog findByGenreIdentifier(String Identifier);
}

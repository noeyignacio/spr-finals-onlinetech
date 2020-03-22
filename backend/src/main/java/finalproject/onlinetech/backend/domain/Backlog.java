package finalproject.onlinetech.backend.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer BSequence = 0;
    private String genreIdentifier;

    // One to one
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="genre_id", nullable = false)
    @JsonIgnore
    private Genre genre;

    // One to Many
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "backlog", orphanRemoval = true)
    private List<Book> books = new ArrayList<>();

    public Backlog() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getBSequence() {
        return BSequence;
    }

    public void setBSequence(Integer BSequence) {
        this.BSequence = BSequence;
    }

    public String getGenreIdentifier() {
        return genreIdentifier;
    }

    public void setGenreIdentifier(String genreIdentifier) {
        this.genreIdentifier = genreIdentifier;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
}

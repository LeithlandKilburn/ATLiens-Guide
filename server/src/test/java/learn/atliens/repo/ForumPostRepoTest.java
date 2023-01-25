package learn.atliens.repo;

import learn.atliens.model.ForumPost;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ComponentScan("learn.atliens")
@SpringBootTest
class ForumPostRepoTest {

    @Autowired
    private ForumPostRepo repo;

    @BeforeEach
    public void setData () {
        List<ForumPost> posts = repo.findAllPosts();
        for (ForumPost post : posts) {
            repo.deletePostById(post.getForumPostID());
        }
        ForumPost post = new ForumPost();
        post.setName("Cool");
        repo.addForumPost(post);

        ForumPost post2 = new ForumPost();
        post.setName("Nice");
        repo.addForumPost(post2);
    }


    @Test
    void addForumPost() {
        ForumPost post = new ForumPost();
        post.setName("Jollo");
        repo.addForumPost(post);
        assertTrue(repo.findAllPosts().size() == 3);
    }

    @Test
    void findAllPosts() {
        assertTrue(repo.findAllPosts().size() == 2);
    }

    @Test
    void deletePostById() {
        String deleteId = repo.findAllPosts().get(0).getForumPostID();
        repo.deletePostById(deleteId);
        assertTrue(repo.findAllPosts().size() == 1);
    }
}
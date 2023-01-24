package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.ForumPost;
import learn.atliens.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class ForumPostRepo {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public ForumPost addForumPost(ForumPost post) {
        // dynamoDbMapper.save() = inserts or updates operation depending on whether the item already exists in the table.
        dynamoDBMapper.save(post);
        System.out.println("Post added!");
        return post;
    }

    public List<ForumPost> findAllPosts() {
        // dynamoDbMapper.scan() = method to retrieve all the records of a table
        // Word.class = the class of the obj to be returned
        // DynamoDbScanExpression is like a filter. If empty, it returns everything on table
        System.out.println("Hit repo");
        List<ForumPost> post = dynamoDBMapper.scan(ForumPost.class, new DynamoDBScanExpression());
        System.out.println(post.get(0));
        return post;
    }

    /*public List<Word> findWordsByCategory(String category) {
        List<Word> all = findAllPosts();
        return all.stream()
                .filter(word -> word.getCategories().contains(category))
                .collect(Collectors.toList());
    }*/

    public String deletePostById(String postId) {
        ForumPost postToDelete = dynamoDBMapper.load(ForumPost.class, postId);
        dynamoDBMapper.delete(postToDelete);
        return "Post Deleted!";
    }
}

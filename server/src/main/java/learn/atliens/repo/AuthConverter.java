package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class AuthConverter implements DynamoDBTypeConverter<String, List<SimpleGrantedAuthority>> {

    @Override
    public String convert(List<SimpleGrantedAuthority> strings) {
        return strings.stream().map(auth -> auth.getAuthority()).collect(Collectors.joining(","));
    }

    @Override
    public List<SimpleGrantedAuthority> unconvert(String s) {
        return Arrays.stream(s.split(","))
                .map(r -> new SimpleGrantedAuthority(r))
                .collect(Collectors.toList());
    }
}

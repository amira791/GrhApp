package com.cnrc.grh.configuration;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
@AllArgsConstructor

public class JwtService {

    private static final String SECRET_KEY = "6E72E83AEAD8D7D1831CFWJGEHJTG34U57673527GSHVGXHVB647CAEE3B";


    //generer un token
    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(),userDetails);
    }
    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ){
        // todo if token not valid what to do ?
         return  Jwts
                .builder()
                 .signWith(getSignInKey())
                 .claims().subject(userDetails.getUsername())
                 .issuedAt(new Date(System.currentTimeMillis()))
                 .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 48))
                 .and().compact();
    }

    // verifier si le token apartient a un utilisateur bien specifique
    public boolean isTokenValid(String token , UserDetails userDetails){
       final String username = extractUsername(token);
       System.out.println("im in valid token");
       return (username.equals(userDetails.getUsername()) ) && !isTokenExpired(token) ;
    }

    private boolean isTokenExpired(String token) {
        return  extractExpiration(token).before( new Date());
    }

    private Date extractExpiration(String token) {
        return  extractClaim(token ,Claims::getExpiration);
    }

    // Extraire toutes les infos du payload
    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
    //Extraire une infos du payload
    public <T> T extractClaim(String token , Function<Claims,T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    //Extarire le nom d'utilisateur
    public String extractUsername(String token) {
        return extractClaim(token ,Claims::getSubject);
    }


    // la cles secrete de chiffrement
    private SecretKey getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

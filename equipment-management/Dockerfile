#FROM openjdk:17: Hna kayn un Docker image li ghadi nbadaw bih,
#wli fhad lahda huwa OpenJDK version 17. Hadi kayna fiha l'environnement Java
 #li ghadi khasna bach ndawro l'application dyalna.
FROM openjdk:17

# EXPOSE 8080: Hna kayn 3ta l'instruction bach n3ttio l'port li ghadi tkhdm fih
#l'application dyalna dakchi bach ykon accessible men l'extérieur.
#Fhad le cas, l'application ghadi tkhdm 3la port 8080.
EXPOSE 8080

# Hna kayn n9adro l'application file (.jar) men l'machine dyalna l'dakhel dyal
#container. Fhad le cas, l'application file kayna f/target wakhay m3tina smiya
#dyalha equipment-management-0.0.1-SNAPSHOT.jar. Hadi ghadi ndirouha froot dyal
#container wnghdwo smiya dyalha l equipment-management.jar.
ADD /target/equipment-management-0.0.1-SNAPSHOT.jar /equipment-management.jar

#Hna kayn nqolo l'docker l'instruction li bghina l'container ykhdm biha mlli ybdaw.
# Fhad le cas, kayn nqolo l'docker bch nrunna
#l'application dyalna lkaida f equipment-management.jar b java -jar.
ENTRYPOINT ["java", "-jar","equipment-management.jar"]
#Fi had l'majmo3a dyal l'instructions, hna kayn ncriw l'image dyal docker li fiyah
#l'application dyalna b'java, ou ghadi tkhdm 3la port 8080,
 #ou ghadi ndakhl l'application jar l'dakhel dyal l'image bach ykhdmha mlli
 #ybdaw container.
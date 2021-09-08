import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (

    <Container>
        <Header title="About Author" />
        <Section
            title="Emilia Warakomska"
            body={
                <>
                    <p>
                        <strong>Mam na imię Emilia i uwielbiam się uczyć.</strong> Moją ogromną pasją jest zdrowy styl życia,
                        trenuję od 16 lat, a przez 10 lat byłam zafascynowana sportami sylwetkowymi, dlatego
                        przez 5 lat trenowałam wyczynowo ten sport (z elementami gimnastyki). Niestety doznałam 2
                        poważnych kontuzji kolan.
                    </p>
                    <p>
                        Kocham wyzwania, <em>nawet nie wiecie jak bardzo.</em> <strong>Mam charakter Wojownika,</strong> więc nie ma dla mnie rzeczy niemożliwych.
                    </p>
                </>
            }
        />
    </Container>
);
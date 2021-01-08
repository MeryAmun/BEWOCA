import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';
import Image from "../images/g1.jpg"
import Image1 from "../images/g5.jpg"
import Image2 from "../images/g3.jpg"
import Image6 from "../images/a2.jpg"
import Image7 from "../images/a1.jpg"






const Nyeneba = () => {
    return (
        <div>
            <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
                <Nav.Item>
                    <Nav.Link href="link-1"> <h1 className="head">HELP BUILD A HEALTH CENTER IN NYENEBA</h1></Nav.Link>
                </Nav.Item>
            </Jumbotron>

            <Container className="fluid display-5-sm">
                <Container className="fluid d-flex">
                    <Carousel className="d-block w-100 h-50">
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h1 className=" title font-weight-normal">Your little is not small</h1>
                            </Carousel.Caption>
                            <img
                                className="d-block w-100"
                                src={Image1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h1 className="title font-weight-normal text-dark ">A little Makes a difference</h1>
                            </Carousel.Caption>
                            <img
                                className="d-block w-100"
                                src={Image2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3 className="title text-center font-weight-bold text-dark lg display-5"> Take action Now!! Volunteer or donate</h3>

                            </Carousel.Caption>
                            <img
                                className="d-block w-100"
                                src={Image}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>


                <section className="d-flex">
                    <div className="para">
                        <h4 className="font-weight-bold text-info">Project Title</h4>
                        <h6>Improving the life and health of the people of Nyeneba through the creation of a clinic to provide drugs and adequate health facility.</h6>
                        <h4 className="font-weight-bold text-info">Project site</h4>
                        <h6>Nyeneba Community South West Region of Cameroon.</h6>

                        <h4 className="font-weight-bold text-info">Proponent</h4>

.<h6 className="font-weight-bold text-dark">Think Big organization in Partnership with Better World Community And Advocacy Organization
</h6>
                        <h4 className="font-weight-bold text-info">Main objective</h4>
                        <h6>The main objective of this project is to lower the infant mortality rate of the people of Nyeneba by providing access to adequate health care and drugs to the community of Nyeneba.</h6>

                        <h4 className="font-weight-bold text-info">Project summary</h4>
                        <p>The on going crisis in the North West and South West Region of Cameroon has forced many victims to flee to neighboring counties, while others are fleeing to safer zones of moving to other communities.
                        Nyeneba is a village located in the South West Region of Cameroon Manyu division precisely in Tinto Subdivision upper Bayang. With an estimated population of about 5000 people.The main occupation of the people is subsistence agriculture which has been hampered by the ongoing crisis in Cameroon.
                        Before the crisis Nyeneba has never had a health center, just a dispensary. Which has been made worst with the ongoing crisis in North West and South West Region of Cameroon.  With the absence of health care facilities, and inaccessible roads caused by the crisis, the population registered and increase in infant mortality rate, infanticide outbreaks like, typhoid, Colerrohea , dysentery, Malaria, anemia,  influenza, communicable and non communicable diseases, trauma as a result of the on going crisis.
                        The most vulnerable people being children, pregnant women, person's with disabilities, old people and internally displaced person's.
                        Atakem Zephaniah Tambo is a physically challenged person from this Community who being displaced himself went back to his village after studying to become a lab technician.  He took upon himself the initiative to start a small mud Clinic  popularly called Zambo's clinic. This clinic is in a mud house which is serving the people of this Community  for the past one year.
                        It is against this background that Think Big organization which is a registered organization in Partnership with Better World Community and Advocacy Organization has taken the initiative of identifying these problems and seeking solutions for them.
                        The project seeks to create  awareness  to the daire needs and plight of the people of the community of Nyeneba.
                        It is envisaged that upon completion of project, mortality rate, infant mortality rate and infanticide will be greatly reduced.
                        That more than least 80% of the population would have access to good health.
                        Problem statement
                        Poor health facility with inaccessibility of drugs and insufficient equipments.
                        There's a saying that health is wealth, but this has not been the case of the people of Nyeneba Community who in the past often resorted to traditional healers and only moved to another  village to get medical help in critical situations. The outbreak of war in the North West and South West Region made matter's worst as there is insecurity, poverty,  hunger, constant road blocks.
                        Inacessability of drugs,
                        insufficient Lab equipments, electricity,  transport and Communication.
                        A structure since the clinic is in a mud house.
                        Medical equipment such as bio chemistry machines, Ultrasound, x-ray , Hemoglobin meter, glucose meter, oxygen meter, themometer, scale, lab reagents, stretchers, wheel chairs, mosquito nets to name a few.
                        Retionale Significance
                        This project seeks to improve the life of the people of the community of Nyeneba village through the provision of a better health facility and access to good health care.
                        As a humanitarian organization we are also looking forward to start a community school on a piece of land which was giving by the community against a  token we offered with the hope of building a modern clinic, a school, and orphanage and a Chapel. Education has been greatly affected by the ongoing crisis.
                        Putting into consideration the four principles of humanitarian action, our attention is empathy, were we focus on improving the health care for all in this locality though not putting a blind eye to the other plights like lack of a school,portable water and electricity.
Call $ WhatsApp: +237653377110 </p>


                    </div>



                    <aside className="float-right">
                        <Card className="card border border-white">
                            <div className="hov d-flex flex-wrap">
                                <img
                                    className="d-block w-100"
                                    src={Image6}
                                    alt="Third slide"

                                />
                            </div>
                            <Card.Body>
                                <Card.Title><h3 className="font-weight-bold text-info">Empower a woman, save a family</h3></Card.Title>
                                <Card.Text>
                                    Sponsor an Internally displaced person to learn a trade or donate to our project aimed at training women and girls on how to make sandals and bags using beads.
    </Card.Text>
                                <Button className="font-weight-bold bg-dark"> <Nav.Item>
                                    <Nav.Link href="/donate">Take Action</Nav.Link>
                                </Nav.Item>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="card border border-white">
                            <img
                                className="hov d-block w-100"
                                src={Image7}
                                alt="Third slide"

                            />

                            <Card.Body>
                                <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
                                <Card.Text>
                                    Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
                                <Button className="font-weight-bold bg-dark"> <Nav.Item>
                                    <Nav.Link href="/donate">Take Action</Nav.Link>
                                </Nav.Item>
                                </Button>
                            </Card.Body>
                        </Card>
                    </aside>
                </section>
            </Container>
        </div>
    );
}

export default Nyeneba;
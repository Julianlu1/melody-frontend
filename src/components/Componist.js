import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from "@material-ui/core/Typography";

import styles from '../css/Componist.module.css';

export default class Componist extends Component {
    render() {
        return (
            <section>
                <h1 className={styles.sectionTitle}>Bekende componisten.</h1>
                <p>Een componist(e) of toondichter(es) is een persoon die muziek componeert.
                Dit wil zeggen dat hij/zij deze bedenkt, creëert en meestal opschrijft.
                    Het ordenen van tonen tot een muziekstuk noemt men componeren.</p>
                <br />
                <Grid container spacing={3} >
                    <Grid container justify="center" item xs={4}>
                        <Card className={styles.root}>
                            <CardActionArea>
                                <CardMedia className={styles.media} image="https://historiek.net/wp-content/uploads-phistor1/2016/12/Johann-Sebastian-Bach.jpeg" title="Bach" />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bach.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Johann Sebastian Bach was een Duitse componist van barokmuziek, organist, klavecinist, violist,
                                    muziekpedagoog en dirigent.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container justify="center" item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={styles.media} image="https://historiek.net/wp-content/uploads-phistor1/2017/11/Ludwig-von-Beethoven-portret-door.jpeg" title="Bach" />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Beethoven.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Ludwig van Beethoven was een Duitse componist, musicus, virtuoos en dirigent.
                                    Zijn stijl sluit direct aan op die van Wolfgang Amadeus Mozart en Joseph Haydn,
                                    met wie hij tot de Eerste Weense School wordt gerekend. Hij bracht het classicisme
                                    tot voltooiing en leidde de romantiek in.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container justify="center" item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia className={styles.media} image="https://historiek.net/wp-content/uploads-phistor1/2016/12/Johann-Sebastian-Bach.jpeg" title="Bach" />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Mozart.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Wolfgang Amadeus Mozart, doopnaam Joannes Chrysostomus Wolfgangus Theophilus Mozart,
                                    was een uit het prinsaartsbisdom Salzburg afkomstige componist, pianist, violist en dirigent.
                                    Hij excelleerde in elke courante muziekvorm uit zijn tijd, met name in opera, de symfonie,
                                    het pianoconcert en kamermuziek.
                                </Typography>
                            </CardContent>
                        </Card>                    </Grid>

                </Grid>

            </section>
        )
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Theme, createStyles, WithStyles, TextField, withStyles, Card, CardContent, CardHeader, Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width:600,
        },
        card: {
            minWidth: 500,
        },
        title: {
            fontSize: 14,
        }
    });

export  interface Props extends WithStyles<typeof styles> { 
    getText:(text:string)=>void
}

interface State {}

class InputText extends Component<Props, State> {
    input_text:string
    constructor(props:Props){
        super(props);
        this.input_text='';
        this.handleChange=this.handleChange.bind(this);
    }
    
    handleChange(e:any){
        this.input_text=e.target.value;
        this.props.getText(this.input_text);
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title}>Your English text</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Input your text here"
                            multiline
                            rows="7"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange} />
                    </CardContent>
                </Card>
            </form>
        );
    }
}

(InputText as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(InputText);
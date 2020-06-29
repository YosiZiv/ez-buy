import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';



export default class FileUploadInput extends React.Component
{
    startUploadImage = ( e ) =>
    {
        e.preventDefault();
        const { id, uploadComplete, clientAllowedFormats, uploadPreset, maxFileSize } = this.props;
        // Cloudinary Upload File Widget.
        const widget = window.cloudinary.createUploadWidget( {
            cloudName: 'moverbird',
            sources: ['local', 'url'],
            maxFile: 1,
            multiple: false,
            clientAllowedFormats,
            uploadPreset,
            maxFileSize,
        }, ( error, result ) =>
        {
            if ( result.event === 'success' )
            {
                uploadComplete( { id, value: result.info.secure_url } );
            }
        } );
        widget.open();
    };

    render()
    {
        const { name, defaultValue, } = this.props;
        return (
            <div className="file-input-container">
                <div className="col-10 text-left my-auto">
                    <Button variant="contained" onClick={this.startUploadImage}>העולה תמונה</Button>

                </div>
            </div>
        );
    }
}

FileUploadInput.propTypes = {



};

FileUploadInput.defaultProps = {
    maxFileSize: 10000000,
    uploadPreset: 'moverbird_companies_logo',
    defaultValue: null,
    displayErrors: true,
    clientAllowedFormats: ['png', 'gif', 'jpeg', 'svg'],
};

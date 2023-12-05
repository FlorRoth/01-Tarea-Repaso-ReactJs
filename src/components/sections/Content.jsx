import React from 'react'
import {novedadeData} from '../../data/Novedades'
import { NewSection } from './NewSection';

export const Content = ({isLogged}) => {

if(!isLogged){
    return (
        <div className='container py-5'>
            <div className='alert alert-info'>
                <strong>Atencion!</strong> No tiene acceso al sistema!
            </div>
        </div>
    )
}
  return (
    <>
        <NewSection title={'Novedades'} cards={novedadeData}/>
        <NewSection title={'Cursos'} cards={novedadeData}/>
    </>
  )
}

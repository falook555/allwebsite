import React, { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../config'

const api = config.api

const Index = () => {

    const [dataARR, getDataARR] = useState([])

    useEffect(() => {
        getAllApp()
    }, [])

    const getAllApp = async () => {
        try {
            const res = await axios.get(`${api}/get-all-app`)
            getDataARR(res.data)
        } catch (error) {
            console.log(error)
            // toast.error('เกิดข้อผิดพลาด')
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='container-fluid'>
                    <div className='text-center mt-5'>
                        <h1 className='text-primary'><b>โรงพยาบาลศรีสังวรสุโขทัย</b></h1>
                        <h4>รวม เว็บไซต์ (Website) และ แอปพลิเคชัน (Application) ทั้งหมดของโรงพยาบาล</h4>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        {
                            dataARR.map((item, i) => {
                                return <div className='col-4 col-lg-1 col-md-3 col-sm-4 mt-3' key={i}>
                                    <a href={item.aa_link_app} target={'_blank'} rel="noreferrer">
                                        <img className='img-thumbnail' style={{ width: '100%', borderRadius: '15px' }} src={'../' + item.aa_image_app} />
                                        <p className='text-center' style={{ fontSize: '12px' }}><b>{item.aa_name_app}</b> </p>
                                    </a>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </ div >
    )
}

export default Index
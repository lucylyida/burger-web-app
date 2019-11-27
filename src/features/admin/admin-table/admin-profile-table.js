import React, { useState, useEffect } from 'react'
import { withMedia } from 'react-media-query-hoc'
import { memoize } from 'react-data-table-component'

import tableTheme from "../../../common/TableThems"
import KmTable from '../../../common/KmTable'
import Mybtn from '../../../common/myButton'

import { getAllProfile } from '../../../network/profileFetcher'

const AdminProfileTable = props => {
    const { media } = props
    const [profile, setProfileData] = useState([])

    useEffect(() => {
        getAllProfile((error, data) => {
            if (error) console.log('fetching error', error)
            else setProfileData(data)
        })
    }, [])

    const data = profile.map(v => ({
        id: v.id,
        address: v.address,
        name: v.name,
        img: v.img,
        mail: v.mail,
        phone: v.phone
    }))

    return (
        <div>
            {/* <div className="d-flex justify-content-end p-2 mx-5">
                <button type="button" className="btn btn-outline-success " style={{ width: 50, height: 30 }} > <i className="fas fa-plus" /> </button>
            </div> */}
            {/* <div className="d-flex justify-content-end pt-2"> <Mybtn text="ADD_NEW" className="btn-success" width={100} /></div> */}
            <KmTable
                columns={columns(media)}
                data={data}
                keyField={"id"}
                defaultSortField={"id"}
                highlightOnHover={true}
                style={{ borderRadius: 6, whiteSpace: 'nowrap', }}
                customTheme={tableTheme(media)}
                pagination={true}
                paginationDefaultPage={1}
                paginationTotalRows={data.length}
                paginationPerPage={5}
                customPagination={true}
            />
        </div>
    )
}

export default withMedia(AdminProfileTable)

const columns = memoize((media, handleDeleteProduct, handleEditProduct) =>
    [
        {
            name: 'Address',
            selector: 'address',
            sortable: true,
            // minWidth: '200px',
            // <div style={{ color: '#153784', fontWeight: 700, textAlign: 'center' }}>{row.image}</div>
        },
        {
            name: ' Name',
            selector: 'name',
            sortable: true,
            right: true,
            // minWidth: '120px',
        },
        {
            name: 'Picture',
            selector: 'img',
            sortable: true,
            right: true,
            cell: row =>
                <img src={row.img} className="img-fluid img-thumbnail w-25 h-100 "   />
            // minWidth: '120px',
        },
        {
            name: ' Mail',
            selector: 'mail',
            sortable: true,
            right: true,
            // minWidth: '250px',
        },
        {
            name: ' Phon No',
            selector: 'phone',
            sortable: true,
            right: true,
            // minWidth: '250px',
        },
        {
            name: '',
            selector: '',
            right: true,
            // minWidth: '200px',
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            cell: row => {
                return (
                    <div
                        onClick={() => console.log(row)}
                        style={{ textAlign: 'right', cursor: 'pointer', color: '#a3a3a2', borderRadius: 6 }}
                        className="p-3 bg-primary text-light"
                    >
                        EDIT
                        </div>
                )
            }
        },
        {
            name: '',
            selector: '',
            right: true,
            // minWidth: '200px',
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            cell: row => {
                return (
                    <div
                        onClick={() => console.log(row)}
                        style={{ textAlign: 'right', cursor: 'pointer', color: '#a3a3a2', borderRadius: 6 }}
                        className="p-3 bg-danger text-light"
                    >
                        DELETE
                         </div>
                )
            }
        },
    ]);
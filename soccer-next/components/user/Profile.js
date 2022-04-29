import React, {useState, useEffect} from 'react'
import Router from "next/router";
import tableStyles from '@/styles/Table.module.css'

export function Profile({user}){
    return <form>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원 프로필</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><h3></h3></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이메일</b></td>
                    <td><h3></h3></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이름</b></td>
                    <td><h3></h3></td>
                </tr>
                <tr>
                    <td><b>전화번호</b></td>
                    <td><h3></h3></td>
                </tr>
                <tr>
                    <td><b>생년월일</b></td>
                    <td><h3></h3></td>
                </tr>
                <tr>
                    <td><b>주소</b></td>
                    <td><h3></h3></td>
                </tr>
                <tr>
                    {/* <td colSpan={2}><button onClick={e=>{Router.push('/user/modify') }}>수정</button><button onClick={e=>{Router.push('/user/del')}}>탈퇴</button></td> */}
                </tr>
            </tbody>
        </table>
    </form>
}
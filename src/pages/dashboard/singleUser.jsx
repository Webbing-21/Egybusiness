import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { customAxios } from '../../lib/axios.lib';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { formatISODate } from '../../lib/formatDate';

export default function SingleUserPage() {
    let { id } = useParams();  // الحصول على id المستخدم من URL
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUser() {
            try {
                const { data } = await customAxios.get(`/user/${id}`);
                setUser(data.data.user);  // تعيين بيانات المستخدم
                setLoading(false);        // إيقاف عرض التحميل
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        }
        getUser();
    }, [id]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="container my-5">
            {user ? (
                <Card className="text-center shadow-md">
                    <Card.Header>
                        <h2>{user.username}</h2>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{user.email}</Card.Title>
                        <Card.Text>
                            <strong>ID: </strong>{user.id}<br />
                            <strong>Created At: </strong>{formatISODate(user.createdAt)}<br />
                            <strong>Updated At: </strong>{formatISODate(user.updatedAt)}
                        </Card.Text>
                        <Button variant="primary" href="/dashboard/allusers">Back to All Users</Button>
                    </Card.Body>
                </Card>
            ) : (
                <h3 className="text-center">User Not Found</h3>
            )}
        </div>
    );
}

import Verify from "@/components/auth/verify";

export default function VerifyPage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <>
            <Verify id={id} />
        </>
    )
}

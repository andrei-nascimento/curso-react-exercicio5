export default function CashRegister({ total }) {
    return <p style={{color: 'white', fontWeight: '600', fontSize: 18, marginTop: 24}}>
        Total do pedido: R$ {total.toFixed(2)}</p>
}
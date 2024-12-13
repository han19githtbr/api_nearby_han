import { prisma } from "@/database/prisma"

async function seed() {

  // Primeiro, exclua todas as regras associadas aos mercados
  await prisma.rules.deleteMany({});
  
  // Primeiro, exclua todos os mercados
  await prisma.market.deleteMany({});

  // Agora, exclua todas as categorias
  await prisma.category.deleteMany({});


  await prisma.category.createMany({
    data: [
      { id: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d", name: "Alimentação" },
      { id: "52e81585-f71a-44cd-8bd0-49771e45da44", name: "Compras" },
      { id: "57d6e5ff-35f6-4d21-a521-84f23d511d25", name: "Hospedagem" },
      { id: "826910d4-187d-4c15-88f4-382b7e056739", name: "Cinema" },
      { id: "abce52cf-b33b-4b3c-8972-eb72c66c83e4", name: "Padaria" },
    ],
  })
  
  await prisma.market.createMany({
    data: [
      // ALIMENTAÇÃO
      {
        id: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Restaurante Niterói",
        description:
          "Restaurante Niterói de Gastronomia",
        latitude: -22.895099346040375,
        longitude: -43.122277628808256,
        coupons: 10,
        address: "R. Aurelina Leal, 65 - Centro, Niterói - RJ",
        phone: "(21) 96747-7738",
        cover: "https://lh5.googleusercontent.com/p/AF1QipPaSb7INrQM_F5uqEuZGx8xCOVEbsfWiNk2smb9=w408-h408-k-no"
        //cover: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300",
      },
      {
        id: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Golden Bull",
        description:
          "Lugar que oferece uma comida muito boa e ótimo atendimento",
        latitude: -22.900156352210942,
        longitude: -43.10163665761851,
        coupons: 10,
        address: "R. Santa Rosa, 112 - Santa Rosa, Niterói - RJ",
        phone: "(21) 3492-7857",
        cover: "https://lh5.googleusercontent.com/p/AF1QipOleSaiFfjwJl4jL8q-SrIRqJANc-hGa6gGottE=w408-h271-k-no",
        //cover: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300",
      },
      {  
        id: "4197b830-aa9c-40d4-a22e-c05043588a77",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Monarca Burgers",
        description:
          "Hambugueria com ambiente familiar e bom para levar as crianças.",
        latitude: -22.90608281291801,
        longitude: -43.10376355761845,
        coupons: 10,
        address: "Av. Roberto Silveira, 408 - Loja Monarca - Icaraí",
        phone: "(21) 99791-3953",
        cover: "https://lh5.googleusercontent.com/p/AF1QipN_NaiCaL5Vb6TseyTLuGTa7DvL7ON7rsEd1DPJ=w408-h611-k-no",
        //cover: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300",
      },
      {  
        id: "4209c72f-9d14-410c-91af-c24d08f177cc",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Niterói Café",
        description:
          "As melhores Tortas em Niterói.",
        latitude: -22.902452792780583,
        longitude: -43.11460169978346,
        coupons: 10,
        address: "R. Ator Paulo Gustavo, 26 - Lj 111 - Icaraí, Niterói - RJ",
        phone: "(21) 2704-3687",
        cover: "https://lh5.googleusercontent.com/p/AF1QipPmzT4Pu9KUryou1yzzrSvdMl9-a2kq-G_u6AaW=w408-h306-k-no",
        //cover: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300",
      },
      {  
        id: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        categoryId: "146b1a88-b3d3-4232-8b8f-c1f006f1e86d",
        name: "Bistrô Vegano",
        description:
          "Especializada em comida vegana, a casa oferece lanches, refeições, tortas e cafés em ambiente aconchegante.",
        latitude: -22.902307481447917,
        longitude: -43.1045211428011,
        coupons: 10,
        address: "Av. Roberto Silveira, 366 - Icaraí, Niterói - RJ",
        phone: "(21) 3254-7671",
        cover: "https://lh5.googleusercontent.com/p/AF1QipMEuqo4C8cNwMbUvDRaJYQPZiGSNMxteOvhf5LI=w408-h306-k-no",
        //cover: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      // COMPRAS
      {  
        id: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Absoluta Fashion",
        description:
          "Roupas e acessórios modernos para o dia a dia. ",
        latitude: -22.887305554141115,
        longitude: -43.12392648556287,
        coupons: 10,
        address: "Av. Visconde do Rio Branco, 233 - Loja 111 - Centro, Niterói - RJ",
        phone: "(21) 3254-2442",
        cover: "https://lh5.googleusercontent.com/p/AF1QipPqNcwvr5GUo28kPif48oED1rGfH5sEWNLeaUQ=w408-h839-k-no",
        //cover: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=300",
      },
      {  
        id: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        categoryId: "52e81585-f71a-44cd-8bd0-49771e45da44",
        name: "Eletrônica Satélite",
        description:
          "Loja de eletrônicos com produtos de última geração. Gadgets e acessórios para todos.",
        latitude: -22.891783541503866,
        longitude: -43.12026020260165,
        coupons: 10,
        address: "R. Cel. Gomes Machado, 135 - Centro, Niterói - RJ",
        phone: "(21) 2622-1810",
        cover: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhEaUKYGvC_ur2mJ1DcKI2z_Qt0c3Q8wsnRMd7A2gDnGXJuuUc3QhRyVpVXyWrZ3n_WAKJ1p-Yxwiyaj0IIcmZ5RGZD4039leHzF8TuAlOh9-0QPPzYRXGOf6I1YsyXHCAVTPAHcT_HRRr9OAEGltghvYW7hySgI3Bu4Oa44rpGVyoOvf73-CK2ORj6EJK5cd3X4Qw=w408-h306-k-no"
        //cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300",
      },
      
      // HOSPEDAGEM
      {  
        id: "7be85f5b-533f-4974-8c9e-75cae740041c",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Icaraí Praia Hotel",
        description:
          "Hotel moderno com quartos aconchegantes. Ideal para relaxar.",
        latitude: -22.907888073897194,
        longitude: -43.11156263773992,
        coupons: 10,
        address: "R. Belisário Augusto, 21 - Icaraí, Niterói - RJ",
        phone: "(21) 2612-5030",
        cover: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhGGH_VK6GqRUfT5bj9RuT-JRil-EmiC1ksxSF9J7PMBu-dTBNHBeLmITZMvKSsxpFX9RavvkqtUL6lTZFsiPRRp82WMk9oEq3K-BJ6aW9hGBQvfUj4QnD2Lj329dNmwN7v0-nn-CccmFHH1W75VVotIl3H4Md9X-Fv2dt0PAzf-kbBXzRNkZ6NCAg=w408-h270-k-no",
        //cover: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=400&h=300",
      },
      {  
        id: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        categoryId: "57d6e5ff-35f6-4d21-a521-84f23d511d25",
        name: "Pousada Fagundes Varela",
        description:
          "Pousada muito charmosa localizado em Niterói",
        latitude: -22.899662266144073,
        longitude: -43.115452015947206,
        coupons: 10,
        address: "R. Fagundes Varela, 484 - Ingá, Niterói - RJ",
        phone: "(21) 97167-1891",
        cover: "https://lh5.googleusercontent.com/p/AF1QipPI06ygF4dRCfAJA3hL672DZavoxPqJyxfv6n0C=w408-h306-k-no"
        //cover: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300",
      },
      
      // CINEMA
      {  
        id: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        categoryId: "826910d4-187d-4c15-88f4-382b7e056739",
        name: "Kinoplex",
        description:
          "Cinema moderno com salas confortáveis e tecnologia de última geração.",
        latitude: -22.8911614875192,
        longitude: -43.12446569018553,
        coupons: 10,
        address: "Av. Visconde do Rio Branco, 360 - Centro, Niterói - RJ",
        phone: "(21) 2461-2461",
        cover: "https://lh5.googleusercontent.com/p/AF1QipM5ytAhC-abdZAgTklP_z1mOpyyzvZmi6d1v8D9=w408-h544-k-no",
        //cover: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300",
      },
      
      // PADARIA
      {  
        id: "def71683-e89f-4c3b-a652-868a02f54ae9",
        categoryId: "abce52cf-b33b-4b3c-8972-eb72c66c83e4",
        name: "Confeitaria Beira Mar",
        description:
          "Restaurante self-service simples e movimentado com mercado e uma padaria antiga.",
        latitude: -22.905028419651263,
        longitude: -43.11214111523701,
        coupons: 10,
        address: "R. Ator Paulo Gustavo, 149 - Icaraí, Niterói - RJ",
        phone: "(21) 3602-1070",
        cover: "https://lh5.googleusercontent.com/p/AF1QipMrUl0g3iaiUFiBjRNeEG5bLHUYg5zlSKwPmruf=w408-h306-k-no",
        //cover: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300",
      },
      
    ],
  })

  await prisma.rules.createMany({
    data: [
      {
        marketId: "012576ea-4441-4b8a-89e5-d5f32104c7c4",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "2bc11e34-5f30-4ba0-90fa-c1c98f649281",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "4197b830-aa9c-40d4-a22e-c05043588a77",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "4209c72f-9d14-410c-91af-c24d08f177cc",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "4e6dd864-f04a-4711-9db2-e5624fd32b8e",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "6dbf1cd5-c20a-4e6a-bc9a-a26069825d2c",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "756b1d53-cc5b-4995-8ebd-8eee3dae01af",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "7be85f5b-533f-4974-8c9e-75cae740041c",
        description: "Disponível até 15/01/2025",
      },
      {
        marketId: "806c7934-037b-4dcd-99bb-c0fc6f2c5a45",
        description: "Disponível até 20/01/2025",
      },
      {
        marketId: "bde73364-95c5-46e4-8084-79a7ca3824c4",
        description: "Disponível até 31/12/2024",
      },
      {
        marketId: "def71683-e89f-4c3b-a652-868a02f54ae9",
        description: "Disponível até 31/12/2024",
      },
    ],
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})

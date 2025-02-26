export interface Pokemon {
    id: number;
    nombre: string;
    tipo: Array<string>;
    tipoPokemon: string;
    legendario: boolean;
    faseEvolutiva: number;
    altura: string;
    peso: string;
    descripcionDiamantePerla: string;
    descripcionPlatino: string;
    spriteDiamantePerla: string;
    spritePlatino: string;
    spriteMiniatura: string;
}
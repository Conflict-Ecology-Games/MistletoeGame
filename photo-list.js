// Photo timeout in milliseconds
// does this even need to be here? it is in the photo.js already?
function shuffleArray(a) {

    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [a[i], a[j]] = [a[j], a[i]]                  // Swap elements
    }
}

function alternateArrays(a1, a2) {
	
	var outArray = a1.concat(a2)
	
	if (Math.random() > 0.5) {
		
		outArray = a2.concat(a1)
		
	}
	
	if (Math.random() > 0.5) {

		[outArray[0], outArray[outArray.length - 1]] = [outArray[outArray.length - 1], outArray[0]]	
	
	}
	
	return (outArray)
	
}

G1M = ["images/001_M_AmyCon_G1.jpg","images/002_M_AmyCon_G1.jpg","images/003_M_AmyCon_G1.jpg","images/004_M_AmyCon_G1.jpg","images/005_M_AmyCon_G1.jpg","images/006_M_AmyCon_G1.jpg","images/007_M_AmyCon_G1.jpg","images/008_M_AmyCon_G1.jpg","images/009_M_AmyCon_G1.jpg","images/010_M_AmyCon_G1.jpg","images/011_M_AmyCon_G1.jpg","images/012_M_AmyCon_G1.jpg","images/013_M_AmyCon_G1.jpg","images/014_M_AmyCon_G1.jpg","images/015_M_AmyCon_G1.jpg"]
G1H = ["images/016_H_AllLit_G1.jpg","images/017_H_AllLit_G1.jpg","images/018_H_AllLit_G1.jpg","images/019_H_AllLit_G1.jpg","images/020_H_AllLit_G1.jpg","images/021_H_AllLit_G1.jpg","images/022_H_AllLit_G1.jpg","images/023_H_AllLit_G1.jpg","images/024_H_AllLit_G1.jpg","images/025_H_AllLit_G1.jpg","images/026_H_AllLit_G1.jpg","images/027_H_AllLit_G1.jpg","images/028_H_AllLit_G1.jpg","images/029_H_AllLit_G1.jpg","images/030_H_AllLit_G1.jpg"]
G2M = ["images/031_M_AmyLuc_G2.jpg","images/032_M_AmyLuc_G2.jpg","images/033_M_AmyLuc_G2.jpg","images/034_M_AmyLuc_G2.jpg","images/035_M_AmyLuc_G2.jpg","images/036_M_AmyLuc_G2.jpg","images/037_M_AmyLuc_G2.jpg","images/038_M_AmyLuc_G2.jpg","images/039_M_AmyLuc_G2.jpg","images/040_M_AmyLuc_G2.jpg","images/041_M_AmyLuc_G2.jpg","images/042_M_AmyLuc_G2.jpg","images/043_M_AmyLuc_G2.jpg","images/044_M_AmyLuc_G2.jpg","images/045_M_AmyLuc_G2.jpg"]
G2H = ["images/046_H_FliMac_G2.jpg","images/047_H_FliMac_G2.jpg","images/048_H_FliMac_G2.jpg","images/049_H_FliMac_G2.jpg","images/050_H_FliMac_G2.jpg","images/051_H_FliMac_G2.jpg","images/052_H_FliMac_G2.jpg","images/053_H_FliMac_G2.jpg","images/054_H_FliMac_G2.jpg","images/055_H_FliMac_G2.jpg","images/056_H_FliMac_G2.jpg","images/057_H_FliMac_G2.jpg","images/058_H_FliMac_G2.jpg","images/059_H_FliMac_G2.jpg","images/060_H_FliMac_G2.jpg"]
G3M = ["images/061_M_AmyMai_G3.jpg","images/062_M_AmyMai_G3.jpg","images/063_M_AmyMai_G3.jpg","images/064_M_AmyMai_G3.jpg","images/065_M_AmyMai_G3.jpg","images/066_M_AmyMai_G3.jpg","images/067_M_AmyMai_G3.jpg","images/068_M_AmyMai_G3.jpg","images/069_M_AmyMai_G3.jpg","images/070_M_AmyMai_G3.jpg","images/071_M_AmyMai_G3.jpg","images/072_M_AmyMai_G3.jpg","images/073_M_AmyMai_G3.jpg","images/074_M_AmyMai_G3.jpg","images/075_M_AmyMai_G3.jpg"]
G3H = ["images/076_H_AcaAne_G3.jpg","images/077_H_AcaAne_G3.jpg","images/078_H_AcaAne_G3.jpg","images/079_H_AcaAne_G3.jpg","images/080_H_AcaAne_G3.jpg","images/081_H_AcaAne_G3.jpg","images/082_H_AcaAne_G3.jpg","images/083_H_AcaAne_G3.jpg","images/084_H_AcaAne_G3.jpg","images/085_H_AcaAne_G3.jpg","images/086_H_AcaAne_G3.jpg","images/087_H_AcaAne_G3.jpg","images/088_H_AcaAne_G3.jpg","images/089_H_AcaAne_G3.jpg","images/090_H_AcaAne_G3.jpg"]
G4M = ["images/091_M_AmyMiq_G4.jpg","images/092_M_AmyMiq_G4.jpg","images/093_M_AmyMiq_G4.jpg","images/094_M_AmyMiq_G4.jpg","images/095_M_AmyMiq_G4.jpg","images/096_M_AmyMiq_G4.jpg","images/097_M_AmyMiq_G4.jpg","images/098_M_AmyMiq_G4.jpg","images/099_M_AmyMiq_G4.jpg","images/100_M_AmyMiq_G4.jpg","images/101_M_AmyMiq_G4.jpg","images/102_M_AmyMiq_G4.jpg","images/103_M_AmyMiq_G4.jpg","images/104_M_AmyMiq_G4.jpg","images/105_M_AmyMiq_G4.jpg"]
G4H = ["images/106_H_EucMin_G4.jpg","images/107_H_EucMin_G4.jpg","images/108_H_EucMin_G4.jpg","images/109_H_EucMin_G4.jpg","images/110_H_EucMin_G4.jpg","images/111_H_EucMin_G4.jpg","images/112_H_EucMin_G4.jpg","images/113_H_EucMin_G4.jpg","images/114_H_EucMin_G4.jpg","images/115_H_EucMin_G4.jpg","images/116_H_EucMin_G4.jpg","images/117_H_EucMin_G4.jpg","images/118_H_EucMin_G4.jpg","images/119_H_EucMin_G4.jpg","images/120_H_EucMin_G4.jpg"]
G5M = ["images/121_M_AmyMai_G5.jpg","images/122_M_AmyMai_G5.jpg","images/123_M_AmyMai_G5.jpg","images/124_M_AmyMai_G5.jpg","images/125_M_AmyMai_G5.jpg","images/126_M_AmyMai_G5.jpg","images/127_M_AmyMai_G5.jpg","images/128_M_AmyMai_G5.jpg","images/129_M_AmyMai_G5.jpg","images/130_M_AmyMai_G5.jpg","images/131_M_AmyMai_G5.jpg","images/132_M_AmyMai_G5.jpg","images/133_M_AmyMai_G5.jpg","images/134_M_AmyMai_G5.jpg","images/135_M_AmyMai_G5.jpg"]
G5H = ["images/136_H_AcaHar_G5.jpg","images/137_H_AcaHar_G5.jpg","images/138_H_AcaHar_G5.jpg","images/139_H_AcaHar_G5.jpg","images/140_H_AcaHar_G5.jpg","images/141_H_AcaHar_G5.jpg","images/142_H_AcaHar_G5.jpg","images/143_H_AcaHar_G5.jpg","images/144_H_AcaHar_G5.jpg","images/145_H_AcaHar_G5.jpg","images/146_H_AcaHar_G5.jpg","images/147_H_AcaHar_G5.jpg","images/148_H_AcaHar_G5.jpg","images/149_H_AcaHar_G5.jpg","images/150_H_AcaHar_G5.jpg"]
G6M = ["images/151_M_AmyMir_G6.jpg","images/152_M_AmyMir_G6.jpg","images/153_M_AmyMir_G6.jpg","images/154_M_AmyMir_G6.jpg","images/155_M_AmyMir_G6.jpg","images/156_M_AmyMir_G6.jpg","images/157_M_AmyMir_G6.jpg","images/158_M_AmyMir_G6.jpg","images/159_M_AmyMir_G6.jpg","images/160_M_AmyMir_G6.jpg","images/161_M_AmyMir_G6.jpg","images/162_M_AmyMir_G6.jpg","images/163_M_AmyMir_G6.jpg","images/164_M_AmyMir_G6.jpg","images/165_M_AmyMir_G6.jpg"]
G6H = ["images/166_H_EreLon_G6.jpg","images/167_H_EreLon_G6.jpg","images/168_H_EreLon_G6.jpg","images/169_H_EreLon_G6.jpg","images/170_H_EreLon_G6.jpg","images/171_H_EreLon_G6.jpg","images/172_H_EreLon_G6.jpg","images/173_H_EreLon_G6.jpg","images/174_H_EreLon_G6.jpg","images/175_H_EreLon_G6.jpg","images/176_H_EreLon_G6.jpg","images/177_H_EreLon_G6.jpg","images/178_H_EreLon_G6.jpg","images/179_H_EreLon_G6.jpg","images/180_H_EreLon_G6.jpg"]
G7M = ["images/181_M_AmyMir_G7.jpg","images/182_M_AmyMir_G7.jpg","images/183_M_AmyMir_G7.jpg","images/184_M_AmyMir_G7.jpg","images/185_M_AmyMir_G7.jpg","images/186_M_AmyMir_G7.jpg","images/187_M_AmyMir_G7.jpg","images/188_M_AmyMir_G7.jpg","images/189_M_AmyMir_G7.jpg","images/190_M_AmyMir_G7.jpg","images/191_M_AmyMir_G7.jpg","images/192_M_AmyMir_G7.jpg","images/193_M_AmyMir_G7.jpg","images/194_M_AmyMir_G7.jpg","images/195_M_AmyMir_G7.jpg"]
G7H = ["images/196_H_EreMit_G7.jpg","images/197_H_EreMit_G7.jpg","images/198_H_EreMit_G7.jpg","images/199_H_EreMit_G7.jpg","images/200_H_EreMit_G7.jpg","images/201_H_EreMit_G7.jpg","images/202_H_EreMit_G7.jpg","images/203_H_EreMit_G7.jpg","images/204_H_EreMit_G7.jpg","images/205_H_EreMit_G7.jpg","images/206_H_EreMit_G7.jpg","images/207_H_EreMit_G7.jpg","images/208_H_EreMit_G7.jpg","images/209_H_EreMit_G7.jpg","images/210_H_EreMit_G7.jpg"]
G8M = ["images/211_M_DenVit_G8.jpg","images/212_M_DenVit_G8.jpg","images/213_M_DenVit_G8.jpg","images/214_M_DenVit_G8.jpg","images/215_M_DenVit_G8.jpg","images/216_M_DenVit_G8.jpg","images/217_M_DenVit_G8.jpg","images/218_M_DenVit_G8.jpg","images/219_M_DenVit_G8.jpg","images/220_M_DenVit_G8.jpg","images/221_M_DenVit_G8.jpg","images/222_M_DenVit_G8.jpg","images/223_M_DenVit_G8.jpg","images/224_M_DenVit_G8.jpg","images/225_M_DenVit_G8.jpg"]
G8H = ["images/226_H_AngCos_G8.jpg","images/227_H_AngCos_G8.jpg","images/228_H_AngCos_G8.jpg","images/229_H_AngCos_G8.jpg","images/230_H_AngCos_G8.jpg","images/231_H_AngCos_G8.jpg","images/232_H_AngCos_G8.jpg","images/233_H_AngCos_G8.jpg","images/234_H_AngCos_G8.jpg","images/235_H_AngCos_G8.jpg","images/236_H_AngCos_G8.jpg","images/237_H_AngCos_G8.jpg","images/238_H_AngCos_G8.jpg","images/239_H_AngCos_G8.jpg","images/240_H_AngCos_G8.jpg"]
G9M = ["images/241_M_MueEuc_G9.jpg","images/242_M_MueEuc_G9.jpg","images/243_M_MueEuc_G9.jpg","images/244_M_MueEuc_G9.jpg","images/245_M_MueEuc_G9.jpg","images/246_M_MueEuc_G9.jpg","images/247_M_MueEuc_G9.jpg","images/248_M_MueEuc_G9.jpg","images/249_M_MueEuc_G9.jpg","images/250_M_MueEuc_G9.jpg","images/251_M_MueEuc_G9.jpg","images/252_M_MueEuc_G9.jpg","images/253_M_MueEuc_G9.jpg","images/254_M_MueEuc_G9.jpg","images/255_M_MueEuc_G9.jpg"]
G9H = ["images/256_H_EucHem_G9.jpg","images/257_H_EucHem_G9.jpg","images/258_H_EucHem_G9.jpg","images/259_H_EucHem_G9.jpg","images/260_H_EucHem_G9.jpg","images/261_H_EucHem_G9.jpg","images/262_H_EucHem_G9.jpg","images/263_H_EucHem_G9.jpg","images/264_H_EucHem_G9.jpg","images/265_H_EucHem_G9.jpg","images/266_H_EucHem_G9.jpg","images/267_H_EucHem_G9.jpg","images/268_H_EucHem_G9.jpg","images/269_H_EucHem_G9.jpg","images/270_H_EucHem_G9.jpg"]
G10M = ["images/271_M_AmyMir_G10.jpg","images/272_M_AmyMir_G10.jpg","images/273_M_AmyMir_G10.jpg","images/274_M_AmyMir_G10.jpg","images/275_M_AmyMir_G10.jpg","images/276_M_AmyMir_G10.jpg","images/277_M_AmyMir_G10.jpg","images/278_M_AmyMir_G10.jpg","images/279_M_AmyMir_G10.jpg","images/280_M_AmyMir_G10.jpg","images/281_M_AmyMir_G10.jpg","images/282_M_AmyMir_G10.jpg","images/283_M_AmyMir_G10.jpg","images/284_M_AmyMir_G10.jpg","images/285_M_AmyMir_G10.jpg"]
G10H = ["images/286_H_MyoPla_G10.jpg","images/287_H_MyoPla_G10.jpg","images/288_H_MyoPla_G10.jpg","images/289_H_MyoPla_G10.jpg","images/290_H_MyoPla_G10.jpg","images/291_H_MyoPla_G10.jpg","images/292_H_MyoPla_G10.jpg","images/293_H_MyoPla_G10.jpg","images/294_H_MyoPla_G10.jpg","images/295_H_MyoPla_G10.jpg","images/296_H_MyoPla_G10.jpg","images/297_H_MyoPla_G10.jpg","images/298_H_MyoPla_G10.jpg","images/299_H_MyoPla_G10.jpg","images/300_H_MyoPla_G10.jpg"]
G11M = ["images/301_M_Amypre_G11.jpg","images/302_M_Amypre_G11.jpg","images/303_M_Amypre_G11.jpg","images/304_M_Amypre_G11.jpg","images/305_M_Amypre_G11.jpg","images/306_M_Amypre_G11.jpg","images/307_M_Amypre_G11.jpg","images/308_M_Amypre_G11.jpg","images/309_M_Amypre_G11.jpg","images/310_M_Amypre_G11.jpg","images/311_M_Amypre_G11.jpg","images/312_M_Amypre_G11.jpg","images/313_M_Amypre_G11.jpg","images/314_M_Amypre_G11.jpg","images/315_M_Amypre_G11.jpg"]
G11H = ["images/316_H_AcaAne_G11.jpg","images/317_H_AcaAne_G11.jpg","images/318_H_AcaAne_G11.jpg","images/319_H_AcaAne_G11.jpg","images/320_H_AcaAne_G11.jpg","images/321_H_AcaAne_G11.jpg","images/322_H_AcaAne_G11.jpg","images/323_H_AcaAne_G11.jpg","images/324_H_AcaAne_G11.jpg","images/325_H_AcaAne_G11.jpg","images/326_H_AcaAne_G11.jpg","images/327_H_AcaAne_G11.jpg","images/328_H_AcaAne_G11.jpg","images/329_H_AcaAne_G11.jpg","images/330_H_AcaAne_G11.jpg"]
G12M = ["images/331_M_AmyPre_G12.jpg","images/332_M_AmyPre_G12.jpg","images/333_M_AmyPre_G12.jpg","images/334_M_AmyPre_G12.jpg","images/335_M_AmyPre_G12.jpg","images/336_M_AmyPre_G12.jpg","images/337_M_AmyPre_G12.jpg","images/338_M_AmyPre_G12.jpg","images/339_M_AmyPre_G12.jpg","images/340_M_AmyPre_G12.jpg","images/341_M_AmyPre_G12.jpg","images/342_M_AmyPre_G12.jpg","images/343_M_AmyPre_G12.jpg","images/344_M_AmyPre_G12.jpg","images/345_M_AmyPre_G12.jpg"]
G12H = ["images/346_H_SenEre_G12.jpg","images/347_H_SenEre_G12.jpg","images/348_H_SenEre_G12.jpg","images/349_H_SenEre_G12.jpg","images/350_H_SenEre_G12.jpg","images/351_H_SenEre_G12.jpg","images/352_H_SenEre_G12.jpg","images/353_H_SenEre_G12.jpg","images/354_H_SenEre_G12.jpg","images/355_H_SenEre_G12.jpg","images/356_H_SenEre_G12.jpg","images/357_H_SenEre_G12.jpg","images/358_H_SenEre_G12.jpg","images/359_H_SenEre_G12.jpg","images/360_H_SenEre_G12.jpg"]
G13M = ["images/361_M_MueEuc_G13.jpg","images/362_M_MueEuc_G13.jpg","images/363_M_MueEuc_G13.jpg","images/364_M_MueEuc_G13.jpg","images/365_M_MueEuc_G13.jpg","images/366_M_MueEuc_G13.jpg","images/367_M_MueEuc_G13.jpg","images/368_M_MueEuc_G13.jpg","images/369_M_MueEuc_G13.jpg","images/370_M_MueEuc_G13.jpg","images/371_M_MueEuc_G13.jpg","images/372_M_MueEuc_G13.jpg","images/373_M_MueEuc_G13.jpg","images/374_M_MueEuc_G13.jpg","images/375_M_MueEuc_G13.jpg"]
G13H = ["images/376_H_EucMol_G13.jpg","images/377_H_EucMol_G13.jpg","images/378_H_EucMol_G13.jpg","images/379_H_EucMol_G13.jpg","images/380_H_EucMol_G13.jpg","images/381_H_EucMol_G13.jpg","images/382_H_EucMol_G13.jpg","images/383_H_EucMol_G13.jpg","images/384_H_EucMol_G13.jpg","images/385_H_EucMol_G13.jpg","images/386_H_EucMol_G13.jpg","images/387_H_EucMol_G13.jpg","images/388_H_EucMol_G13.jpg","images/389_H_EucMol_G13.jpg","images/390_H_EucMol_G13.jpg"]
G14M = ["images/391_M_DenOdo_G14.jpg","images/392_M_DenOdo_G14.jpg","images/393_M_DenOdo_G14.jpg","images/394_M_DenOdo_G14.jpg","images/395_M_DenOdo_G14.jpg","images/396_M_DenOdo_G14.jpg","images/397_M_DenOdo_G14.jpg","images/398_M_DenOdo_G14.jpg","images/399_M_DenOdo_G14.jpg","images/400_M_DenOdo_G14.jpg","images/401_M_DenOdo_G14.jpg","images/402_M_DenOdo_G14.jpg","images/403_M_DenOdo_G14.jpg","images/404_M_DenOdo_G14.jpg","images/405_M_DenOdo_G14.jpg"]
G14H = ["images/406_H_GrePte_G14.jpg","images/407_H_GrePte_G14.jpg","images/408_H_GrePte_G14.jpg","images/409_H_GrePte_G14.jpg","images/410_H_GrePte_G14.jpg","images/411_H_GrePte_G14.jpg","images/412_H_GrePte_G14.jpg","images/413_H_GrePte_G14.jpg","images/414_H_GrePte_G14.jpg","images/415_H_GrePte_G14.jpg","images/416_H_GrePte_G14.jpg","images/417_H_GrePte_G14.jpg","images/418_H_GrePte_G14.jpg","images/419_H_GrePte_G14.jpg","images/420_H_GrePte_G14.jpg"]
G15M = ["images/421_M_AmySan_G15.jpg","images/422_M_AmySan_G15.jpg","images/423_M_AmySan_G15.jpg","images/424_M_AmySan_G15.jpg","images/425_M_AmySan_G15.jpg","images/426_M_AmySan_G15.jpg","images/427_M_AmySan_G15.jpg","images/428_M_AmySan_G15.jpg","images/429_M_AmySan_G15.jpg","images/430_M_AmySan_G15.jpg","images/431_M_AmySan_G15.jpg","images/432_M_AmySan_G15.jpg","images/433_M_AmySan_G15.jpg","images/434_M_AmySan_G15.jpg","images/435_M_AmySan_G15.jpg"]
G15H = ["images/436_H_EucMin_G15.jpg","images/437_H_EucMin_G15.jpg","images/438_H_EucMin_G15.jpg","images/439_H_EucMin_G15.jpg","images/440_H_EucMin_G15.jpg","images/441_H_EucMin_G15.jpg","images/442_H_EucMin_G15.jpg","images/443_H_EucMin_G15.jpg","images/444_H_EucMin_G15.jpg","images/445_H_EucMin_G15.jpg","images/446_H_EucMin_G15.jpg","images/447_H_EucMin_G15.jpg","images/448_H_EucMin_G15.jpg","images/449_H_EucMin_G15.jpg","images/450_H_EucMin_G15.jpg"]
G16M = ["images/451_M_DenVit_G16.jpg","images/452_M_DenVit_G16.jpg","images/453_M_DenVit_G16.jpg","images/454_M_DenVit_G16.jpg","images/455_M_DenVit_G16.jpg","images/456_M_DenVit_G16.jpg","images/457_M_DenVit_G16.jpg","images/458_M_DenVit_G16.jpg","images/459_M_DenVit_G16.jpg","images/460_M_DenVit_G16.jpg","images/461_M_DenVit_G16.jpg","images/462_M_DenVit_G16.jpg","images/463_M_DenVit_G16.jpg","images/464_M_DenVit_G16.jpg","images/465_M_DenVit_G16.jpg"]
G16H = ["images/466_H_EucSp2_G16.jpg","images/467_H_EucSp2_G16.jpg","images/468_H_EucSp2_G16.jpg","images/469_H_EucSp2_G16.jpg","images/470_H_EucSp2_G16.jpg","images/471_H_EucSp2_G16.jpg","images/472_H_EucSp2_G16.jpg","images/473_H_EucSp2_G16.jpg","images/474_H_EucSp2_G16.jpg","images/475_H_EucSp2_G16.jpg","images/476_H_EucSp2_G16.jpg","images/477_H_EucSp2_G16.jpg","images/478_H_EucSp2_G16.jpg","images/479_H_EucSp2_G16.jpg","images/480_H_EucSp2_G16.jpg"]
G17M = ["images/481_M_MueEuc_G17.jpg","images/482_M_MueEuc_G17.jpg","images/483_M_MueEuc_G17.jpg","images/484_M_MueEuc_G17.jpg","images/485_M_MueEuc_G17.jpg","images/486_M_MueEuc_G17.jpg","images/487_M_MueEuc_G17.jpg","images/488_M_MueEuc_G17.jpg","images/489_M_MueEuc_G17.jpg","images/490_M_MueEuc_G17.jpg","images/491_M_MueEuc_G17.jpg","images/492_M_MueEuc_G17.jpg","images/493_M_MueEuc_G17.jpg","images/494_M_MueEuc_G17.jpg","images/495_M_MueEuc_G17.jpg"]
G17H = ["images/496_H_EucSp3_G17.jpg","images/497_H_EucSp3_G17.jpg","images/498_H_EucSp3_G17.jpg","images/499_H_EucSp3_G17.jpg","images/500_H_EucSp3_G17.jpg","images/501_H_EucSp3_G17.jpg","images/502_H_EucSp3_G17.jpg","images/503_H_EucSp3_G17.jpg","images/504_H_EucSp3_G17.jpg","images/505_H_EucSp3_G17.jpg","images/506_H_EucSp3_G17.jpg","images/507_H_EucSp3_G17.jpg","images/508_H_EucSp3_G17.jpg","images/509_H_EucSp3_G17.jpg","images/510_H_EucSp3_G17.jpg"]
G18M = ["images/511_M_DecSig_G18.jpg","images/512_M_DecSig_G18.jpg","images/513_M_DecSig_G18.jpg","images/514_M_DecSig_G18.jpg","images/515_M_DecSig_G18.jpg","images/516_M_DecSig_G18.jpg","images/517_M_DecSig_G18.jpg","images/518_M_DecSig_G18.jpg","images/519_M_DecSig_G18.jpg","images/520_M_DecSig_G18.jpg","images/521_M_DecSig_G18.jpg","images/522_M_DecSig_G18.jpg","images/523_M_DecSig_G18.jpg","images/524_M_DecSig_G18.jpg","images/525_M_DecSig_G18.jpg"]
G18H = ["images/526_H_XanPar_G18.jpg","images/527_H_XanPar_G18.jpg","images/528_H_XanPar_G18.jpg","images/529_H_XanPar_G18.jpg","images/530_H_XanPar_G18.jpg","images/531_H_XanPar_G18.jpg","images/532_H_XanPar_G18.jpg","images/533_H_XanPar_G18.jpg","images/534_H_XanPar_G18.jpg","images/535_H_XanPar_G18.jpg","images/536_H_XanPar_G18.jpg","images/537_H_XanPar_G18.jpg","images/538_H_XanPar_G18.jpg","images/539_H_XanPar_G18.jpg","images/540_H_XanPar_G18.jpg"]
G19M = ["images/541_M_LysExo_G19.jpg","images/542_M_LysExo_G19.jpg","images/543_M_LysExo_G19.jpg","images/544_M_LysExo_G19.jpg","images/545_M_LysExo_G19.jpg","images/546_M_LysExo_G19.jpg","images/547_M_LysExo_G19.jpg","images/548_M_LysExo_G19.jpg","images/549_M_LysExo_G19.jpg","images/550_M_LysExo_G19.jpg","images/551_M_LysExo_G19.jpg","images/552_M_LysExo_G19.jpg","images/553_M_LysExo_G19.jpg","images/554_M_LysExo_G19.jpg","images/555_M_LysExo_G19.jpg"]
G19H = ["images/556_H_AcaAne_G19.jpg","images/557_H_AcaAne_G19.jpg","images/558_H_AcaAne_G19.jpg","images/559_H_AcaAne_G19.jpg","images/560_H_AcaAne_G19.jpg","images/561_H_AcaAne_G19.jpg","images/562_H_AcaAne_G19.jpg","images/563_H_AcaAne_G19.jpg","images/564_H_AcaAne_G19.jpg","images/565_M_AcaAne_G19.jpg","images/566_M_AcaAne_G19.jpg","images/567_M_AcaAne_G19.jpg","images/568_M_AcaAne_G19.jpg","images/569_M_AcaAne_G19.jpg","images/570_M_AcaAne_G19.jpg"]
G20M = ["images/571_M_AmyPre_G20.jpg","images/572_M_AmyPre_G20.jpg","images/573_M_AmyPre_G20.jpg","images/574_M_AmyPre_G20.jpg","images/575_M_AmyPre_G20.jpg","images/576_M_AmyPre_G20.jpg","images/577_M_AmyPre_G20.jpg","images/578_M_AmyPre_G20.jpg","images/579_M_AmyPre_G20.jpg","images/580_M_AmyPre_G20.jpg","images/581_M_AmyPre_G20.jpg","images/582_M_AmyPre_G20.jpg","images/583_M_AmyPre_G20.jpg","images/584_M_AmyPre_G20.jpg","images/585_M_AmyPre_G20.jpg"]
G20H = ["images/586_H_FliMac_G20.jpg","images/587_H_FliMac_G20.jpg","images/588_H_FliMac_G20.jpg","images/589_H_FliMac_G20.jpg","images/590_H_FliMac_G20.jpg","images/591_H_FliMac_G20.jpg","images/592_H_FliMac_G20.jpg","images/593_H_FliMac_G20.jpg","images/594_H_FliMac_G20.jpg","images/595_H_FliMac_G20.jpg","images/596_H_FliMac_G20.jpg","images/597_H_FliMac_G20.jpg","images/598_H_FliMac_G20.jpg","images/599_H_FliMac_G20.jpg","images/600_H_FliMac_G20.jpg"]
G21M = ["images/601_M_LysLin_G21.jpg","images/602_M_LysLin_G21.jpg","images/603_M_LysLin_G21.jpg","images/604_M_LysLin_G21.jpg","images/605_M_LysLin_G21.jpg","images/606_M_LysLin_G21.jpg","images/607_M_LysLin_G21.jpg","images/608_M_LysLin_G21.jpg","images/609_M_LysLin_G21.jpg","images/610_M_LysLin_G21.jpg","images/611_M_LysLin_G21.jpg","images/612_M_LysLin_G21.jpg","images/613_M_LysLin_G21.jpg","images/614_M_LysLin_G21.jpg","images/615_M_LysLin_G21.jpg"]
G21H = ["images/616_H_EreMit_G21.jpg","images/617_H_EreMit_G21.jpg","images/618_H_EreMit_G21.jpg","images/619_H_EreMit_G21.jpg","images/620_H_EreMit_G21.jpg","images/621_H_EreMit_G21.jpg","images/622_H_EreMit_G21.jpg","images/623_H_EreMit_G21.jpg","images/624_H_EreMit_G21.jpg","images/625_H_EreMit_G21.jpg","images/626_H_EreMit_G21.jpg","images/627_H_EreMit_G21.jpg","images/628_H_EreMit_G21.jpg","images/629_H_EreMit_G21.jpg","images/630_H_EreMit_G21.jpg"]
G22M = ["images/631_M_AmySan_G22.jpg","images/632_M_AmySan_G22.jpg","images/633_M_AmySan_G22.jpg","images/634_M_AmySan_G22.jpg","images/635_M_AmySan_G22.jpg","images/636_M_AmySan_G22.jpg","images/637_M_AmySan_G22.jpg","images/638_M_AmySan_G22.jpg","images/639_M_AmySan_G22.jpg","images/640_M_AmySan_G22.jpg","images/641_M_AmySan_G22.jpg","images/642_M_AmySan_G22.jpg","images/643_M_AmySan_G22.jpg","images/644_M_AmySan_G22.jpg","images/645_M_AmySan_G22.jpg"]
G22H = ["images/646_H_CorBle_G22.jpg","images/647_H_CorBle_G22.jpg","images/648_H_CorBle_G22.jpg","images/649_H_CorBle_G22.jpg","images/650_H_CorBle_G22.jpg","images/651_H_CorBle_G22.jpg","images/652_H_CorBle_G22.jpg","images/653_H_CorBle_G22.jpg","images/654_H_CorBle_G22.jpg","images/655_H_CorBle_G22.jpg","images/656_H_CorBle_G22.jpg","images/657_H_CorBle_G22.jpg","images/658_H_CorBle_G22.jpg","images/659_H_CorBle_G22.jpg","images/670_H_CorBle_G22.jpg"]
G23M = ["images/661_M_AmySan_G23.jpg","images/662_M_AmySan_G23.jpg","images/663_M_AmySan_G23.jpg","images/664_M_AmySan_G23.jpg","images/665_M_AmySan_G23.jpg","images/666_M_AmySan_G23.jpg","images/667_M_AmySan_G23.jpg","images/668_M_AmySan_G23.jpg","images/669_M_AmySan_G23.jpg","images/670_M_AmySan_G23.jpg","images/671_M_AmySan_G23.jpg","images/672_M_AmySan_G23.jpg","images/673_M_AmySan_G23.jpg","images/674_M_AmySan_G23.jpg","images/675_M_AmySan_G23.jpg"]
G23H = ["images/676_H_CorPor_G23.jpg","images/677_H_CorPor_G23.jpg","images/678_H_CorPor_G23.jpg","images/679_H_CorPor_G23.jpg","images/680_H_CorPor_G23.jpg","images/681_H_CorPor_G23.jpg","images/682_H_CorPor_G23.jpg","images/683_H_CorPor_G23.jpg","images/684_H_CorPor_G23.jpg","images/685_H_CorPor_G23.jpg","images/686_H_CorPor_G23.jpg","images/687_H_CorPor_G23.jpg","images/688_H_CorPor_G23.jpg","images/689_H_CorPor_G23.jpg","images/690_H_CorPor_G23.jpg"]
G24M = ["images/691_M_AmySan_G24.jpg","images/692_M_AmySan_G24.jpg","images/693_M_AmySan_G24.jpg","images/694_M_AmySan_G24.jpg","images/695_M_AmySan_G24.jpg","images/696_M_AmySan_G24.jpg","images/697_M_AmySan_G24.jpg","images/698_M_AmySan_G24.jpg","images/699_M_AmySan_G24.jpg","images/700_M_AmySan_G24.jpg","images/701_M_AmySan_G24.jpg","images/702_M_AmySan_G24.jpg","images/703_M_AmySan_G24.jpg","images/704_M_AmySan_G24.jpg","images/705_M_AmySan_G24.jpg"]
G24H = ["images/706_H_EucTet_G24.jpg","images/707_H_EucTet_G24.jpg","images/708_H_EucTet_G24.jpg","images/709_H_EucTet_G24.jpg","images/710_H_EucTet_G24.jpg","images/711_H_EucTet_G24.jpg","images/712_H_EucTet_G24.jpg","images/713_H_EucTet_G24.jpg","images/714_H_EucTet_G24.jpg","images/715_H_EucTet_G24.jpg","images/716_H_EucTet_G24.jpg","images/717_H_EucTet_G24.jpg","images/718_H_EucTet_G24.jpg","images/719_H_EucTet_G24.jpg","images/720_H_EucTet_G24.jpg"]
G25M = ["images/721_M_LysExo_G25.jpg","images/722_M_LysExo_G25.jpg","images/723_M_LysExo_G25.jpg","images/724_M_LysExo_G25.jpg","images/725_M_LysExo_G25.jpg","images/726_M_LysExo_G25.jpg","images/727_M_LysExo_G25.jpg","images/728_M_LysExo_G25.jpg","images/729_M_LysExo_G25.jpg","images/730_M_LysExo_G25.jpg","images/731_M_LysExo_G25.jpg","images/732_M_LysExo_G25.jpg","images/733_M_LysExo_G25.jpg","images/734_M_LysExo_G25.jpg","images/735_M_LysExo_G25.jpg"]
G25H = ["images/736_H_AleOle_G25.jpg","images/737_H_AleOle_G25.jpg","images/738_H_AleOle_G25.jpg","images/739_H_AleOle_G25.jpg","images/740_H_AleOle_G25.jpg","images/741_H_AleOle_G25.jpg","images/742_H_AleOle_G25.jpg","images/743_H_AleOle_G25.jpg","images/744_H_AleOle_G25.jpg","images/745_H_AleOle_G25.jpg","images/746_H_AleOle_G25.jpg","images/747_H_AleOle_G25.jpg","images/748_H_AleOle_G25.jpg","images/749_H_AleOle_G25.jpg","images/750_H_AleOle_G25.jpg"]

shuffleArray(G1M)
shuffleArray(G1H)
shuffleArray(G2M)
shuffleArray(G2H)
shuffleArray(G3M)
shuffleArray(G3H)
shuffleArray(G4M)
shuffleArray(G4H)
shuffleArray(G5M)
shuffleArray(G5H)
shuffleArray(G6M)
shuffleArray(G6H)
shuffleArray(G7M)
shuffleArray(G7H)
shuffleArray(G8M)
shuffleArray(G8H)
shuffleArray(G9M)
shuffleArray(G9H)
shuffleArray(G10M)
shuffleArray(G10H)
shuffleArray(G11M)
shuffleArray(G11H)
shuffleArray(G12M)
shuffleArray(G12H)
shuffleArray(G13M)
shuffleArray(G13H)
shuffleArray(G14M)
shuffleArray(G14H)
shuffleArray(G15M)
shuffleArray(G15H)
shuffleArray(G16M)
shuffleArray(G16H)
shuffleArray(G17M)
shuffleArray(G17H)
shuffleArray(G18M)
shuffleArray(G18H)
shuffleArray(G19M)
shuffleArray(G19H)
shuffleArray(G20M)
shuffleArray(G20H)
shuffleArray(G21M)
shuffleArray(G21H)
shuffleArray(G22M)
shuffleArray(G22H)
shuffleArray(G23M)
shuffleArray(G23H)
shuffleArray(G24M)
shuffleArray(G24H)
shuffleArray(G25M)
shuffleArray(G25H)

G1 = alternateArrays(G1M,G1H)
G2 = alternateArrays(G2M,G2H)
G3 = alternateArrays(G3M,G3H)
G4 = alternateArrays(G4M,G4H)
G5 = alternateArrays(G5M,G5H)
G6 = alternateArrays(G6M,G6H)
G7 = alternateArrays(G7M,G7H)
G8 = alternateArrays(G8M,G8H)
G9 = alternateArrays(G9M,G9H)
G10 = alternateArrays(G10M,G10H)
G11 = alternateArrays(G11M,G11H)
G12 = alternateArrays(G12M,G12H)
G13 = alternateArrays(G13M,G13H)
G14 = alternateArrays(G14M,G14H)
G15 = alternateArrays(G15M,G15H)
G16 = alternateArrays(G16M,G16H)
G17 = alternateArrays(G17M,G17H)
G18 = alternateArrays(G18M,G18H)
G19 = alternateArrays(G19M,G19H)
G20 = alternateArrays(G20M,G20H)
G21 = alternateArrays(G21M,G21H)
G22 = alternateArrays(G22M,G22H)
G23 = alternateArrays(G23M,G23H)
G24 = alternateArrays(G24M,G24H)
G25 = alternateArrays(G25M,G25H)

photoTimeout = 100000;
// Number of photos to show in a sinle trial
numPhotos = 11;
// List of candidate photos. Each photo has a URL, a weight
// (i.e. relative likelihood of being included in a trial), and
// whether it's type should be known by the "average" predator. The
// "known" field must be one of "ant", "notAnt" or null.
candidatePhotos = [	
	{ url: G1[1],
	  url2: G1[2],
	  url3: G1[3],
	  url4: G1[0],
	  url5: G1[G1.length - 2],
	  url6: G1[G1.length - 3],
	  url7: G1[G1.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G2[1],
	  url2: G2[2],
	  url3: G2[3],
	  url4: G2[0],
	  url5: G2[G2.length - 2],
	  url6: G2[G2.length - 3],
	  url7: G2[G2.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G3[1],
	  url2: G3[2],
	  url3: G3[3],
	  url4: G3[0],
	  url5: G3[G3.length - 2],
	  url6: G3[G3.length - 3],
	  url7: G3[G3.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G4[1],
	  url2: G4[2],
	  url3: G4[3],
	  url4: G4[0],
	  url5: G4[G4.length - 2],
	  url6: G4[G4.length - 3],
	  url7: G4[G4.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G5[1],
	  url2: G5[2],
	  url3: G5[3],
	  url4: G5[0],
	  url5: G5[G5.length - 2],
	  url6: G5[G5.length - 3],
	  url7: G5[G5.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G6[1],
	  url2: G6[2],
	  url3: G6[3],
	  url4: G6[0],
	  url5: G6[G6.length - 2],
	  url6: G6[G6.length - 3],
	  url7: G6[G6.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G7[1],
	  url2: G7[2],
	  url3: G7[3],
	  url4: G7[0],
	  url5: G7[G7.length - 2],
	  url6: G7[G7.length - 3],
	  url7: G7[G7.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G8[1],
	  url2: G8[2],
	  url3: G8[3],
	  url4: G8[0],
	  url5: G8[G8.length - 2],
	  url6: G8[G8.length - 3],
	  url7: G8[G8.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G9[1],
	  url2: G9[2],
	  url3: G9[3],
	  url4: G9[0],
	  url5: G9[G9.length - 2],
	  url6: G9[G9.length - 3],
	  url7: G9[G9.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G10[1],
	  url2: G10[2],
	  url3: G10[3],
	  url4: G10[0],
	  url5: G10[G10.length - 2],
	  url6: G10[G10.length - 3],
	  url7: G10[G10.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G11[1],
	  url2: G11[2],
	  url3: G11[3],
	  url4: G11[0],
	  url5: G11[G11.length - 2],
	  url6: G11[G11.length - 3],
	  url7: G11[G11.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G12[1],
	  url2: G12[2],
	  url3: G12[3],
	  url4: G12[0],
	  url5: G12[G12.length - 2],
	  url6: G12[G12.length - 3],
	  url7: G12[G12.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G13[1],
	  url2: G13[2],
	  url3: G13[3],
	  url4: G13[0],
	  url5: G13[G13.length - 2],
	  url6: G13[G13.length - 3],
	  url7: G13[G13.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G14[1],
	  url2: G14[2],
	  url3: G14[3],
	  url4: G14[0],
	  url5: G14[G14.length - 2],
	  url6: G14[G14.length - 3],
	  url7: G14[G14.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G15[1],
	  url2: G15[2],
	  url3: G15[3],
	  url4: G15[0],
	  url5: G15[G15.length - 2],
	  url6: G15[G15.length - 3],
	  url7: G15[G15.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G16[1],
	  url2: G16[2],
	  url3: G16[3],
	  url4: G16[0],
	  url5: G16[G16.length - 2],
	  url6: G16[G16.length - 3],
	  url7: G16[G16.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G17[1],
	  url2: G17[2],
	  url3: G17[3],
	  url4: G17[0],
	  url5: G17[G17.length - 2],
	  url6: G17[G17.length - 3],
	  url7: G17[G17.length - 4],
	  weight: 1,
	  known: null
	},
		{ url: G18[1],
	  url2: G18[2],
	  url3: G18[3],
	  url4: G18[0],
	  url5: G18[G18.length - 2],
	  url6: G18[G18.length - 3],
	  url7: G18[G18.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G19[1],
	  url2: G19[2],
	  url3: G19[3],
	  url4: G19[0],
	  url5: G19[G19.length - 2],
	  url6: G19[G19.length - 3],
	  url7: G19[G19.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G20[1],
	  url2: G20[2],
	  url3: G20[3],
	  url4: G20[0],
	  url5: G20[G20.length - 2],
	  url6: G20[G20.length - 3],
	  url7: G20[G20.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G21[1],
	  url2: G21[2],
	  url3: G21[3],
	  url4: G21[0],
	  url5: G21[G21.length - 2],
	  url6: G21[G21.length - 3],
	  url7: G21[G21.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G22[1],
	  url2: G22[2],
	  url3: G22[3],
	  url4: G22[0],
	  url5: G22[G22.length - 2],
	  url6: G22[G22.length - 3],
	  url7: G22[G22.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G23[1],
	  url2: G23[2],
	  url3: G23[3],
	  url4: G23[0],
	  url5: G23[G23.length - 2],
	  url6: G23[G23.length - 3],
	  url7: G23[G23.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G24[1],
	  url2: G24[2],
	  url3: G24[3],
	  url4: G24[0],
	  url5: G24[G24.length - 2],
	  url6: G24[G24.length - 3],
	  url7: G24[G24.length - 4],
	  weight: 1,
	  known: null
	},
	{ url: G25[1],
	  url2: G25[2],
	  url3: G25[3],
	  url4: G25[0],
	  url5: G25[G25.length - 2],
	  url6: G25[G25.length - 3],
	  url7: G25[G25.length - 4],
	  weight: 1,
	  known: null
	},
];


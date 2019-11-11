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

G1M = ["images2/001_M_AmyCon_G1.jpg","images2/002_M_AmyCon_G1.jpg","images2/003_M_AmyCon_G1.jpg","images2/004_M_AmyCon_G1.jpg","images2/005_M_AmyCon_G1.jpg","images2/006_M_AmyCon_G1.jpg","images2/007_M_AmyCon_G1.jpg","images2/008_M_AmyCon_G1.jpg","images2/009_M_AmyCon_G1.jpg","images2/010_M_AmyCon_G1.jpg","images2/011_M_AmyCon_G1.jpg","images2/012_M_AmyCon_G1.jpg","images2/013_M_AmyCon_G1.jpg","images2/014_M_AmyCon_G1.jpg","images2/015_M_AmyCon_G1.jpg"]
G1H = ["images2/016_H_AllLit_G1.jpg","images2/017_H_AllLit_G1.jpg","images2/018_H_AllLit_G1.jpg","images2/019_H_AllLit_G1.jpg","images2/020_H_AllLit_G1.jpg","images2/021_H_AllLit_G1.jpg","images2/022_H_AllLit_G1.jpg","images2/023_H_AllLit_G1.jpg","images2/024_H_AllLit_G1.jpg","images2/025_H_AllLit_G1.jpg","images2/026_H_AllLit_G1.jpg","images2/027_H_AllLit_G1.jpg","images2/028_H_AllLit_G1.jpg","images2/029_H_AllLit_G1.jpg","images2/030_H_AllLit_G1.jpg"]
G2M = ["images2/031_M_AmyLuc_G2.jpg","images2/032_M_AmyLuc_G2.jpg","images2/033_M_AmyLuc_G2.jpg","images2/034_M_AmyLuc_G2.jpg","images2/035_M_AmyLuc_G2.jpg","images2/036_M_AmyLuc_G2.jpg","images2/037_M_AmyLuc_G2.jpg","images2/038_M_AmyLuc_G2.jpg","images2/039_M_AmyLuc_G2.jpg","images2/040_M_AmyLuc_G2.jpg","images2/041_M_AmyLuc_G2.jpg","images2/042_M_AmyLuc_G2.jpg","images2/043_M_AmyLuc_G2.jpg","images2/044_M_AmyLuc_G2.jpg","images2/045_M_AmyLuc_G2.jpg"]
G2H = ["images2/046_H_FliMac_G2.jpg","images2/047_H_FliMac_G2.jpg","images2/048_H_FliMac_G2.jpg","images2/049_H_FliMac_G2.jpg","images2/050_H_FliMac_G2.jpg","images2/051_H_FliMac_G2.jpg","images2/052_H_FliMac_G2.jpg","images2/053_H_FliMac_G2.jpg","images2/054_H_FliMac_G2.jpg","images2/055_H_FliMac_G2.jpg","images2/056_H_FliMac_G2.jpg","images2/057_H_FliMac_G2.jpg","images2/058_H_FliMac_G2.jpg","images2/059_H_FliMac_G2.jpg","images2/060_H_FliMac_G2.jpg"]
G3M = ["images2/061_M_AmyMai_G3.jpg","images2/062_M_AmyMai_G3.jpg","images2/063_M_AmyMai_G3.jpg","images2/064_M_AmyMai_G3.jpg","images2/065_M_AmyMai_G3.jpg","images2/066_M_AmyMai_G3.jpg","images2/067_M_AmyMai_G3.jpg","images2/068_M_AmyMai_G3.jpg","images2/069_M_AmyMai_G3.jpg","images2/070_M_AmyMai_G3.jpg","images2/071_M_AmyMai_G3.jpg","images2/072_M_AmyMai_G3.jpg","images2/073_M_AmyMai_G3.jpg","images2/074_M_AmyMai_G3.jpg","images2/075_M_AmyMai_G3.jpg"]
G3H = ["images2/076_H_AcaAne_G3.jpg","images2/077_H_AcaAne_G3.jpg","images2/078_H_AcaAne_G3.jpg","images2/079_H_AcaAne_G3.jpg","images2/080_H_AcaAne_G3.jpg","images2/081_H_AcaAne_G3.jpg","images2/082_H_AcaAne_G3.jpg","images2/083_H_AcaAne_G3.jpg","images2/084_H_AcaAne_G3.jpg","images2/085_H_AcaAne_G3.jpg","images2/086_H_AcaAne_G3.jpg","images2/087_H_AcaAne_G3.jpg","images2/088_H_AcaAne_G3.jpg","images2/089_H_AcaAne_G3.jpg","images2/090_H_AcaAne_G3.jpg"]
G4M = ["images2/121_M_AmyMai_G4.jpg","images2/122_M_AmyMai_G4.jpg","images2/123_M_AmyMai_G4.jpg","images2/124_M_AmyMai_G4.jpg","images2/125_M_AmyMai_G4.jpg","images2/126_M_AmyMai_G4.jpg","images2/127_M_AmyMai_G4.jpg","images2/128_M_AmyMai_G4.jpg","images2/129_M_AmyMai_G4.jpg","images2/130_M_AmyMai_G4.jpg","images2/131_M_AmyMai_G4.jpg","images2/132_M_AmyMai_G4.jpg","images2/133_M_AmyMai_G4.jpg","images2/134_M_AmyMai_G4.jpg","images2/135_M_AmyMai_G4.jpg"]
G4H = ["images2/136_H_AcaHar_G4.jpg","images2/137_H_AcaHar_G4.jpg","images2/138_H_AcaHar_G4.jpg","images2/139_H_AcaHar_G4.jpg","images2/140_H_AcaHar_G4.jpg","images2/141_H_AcaHar_G4.jpg","images2/142_H_AcaHar_G4.jpg","images2/143_H_AcaHar_G4.jpg","images2/144_H_AcaHar_G4.jpg","images2/145_H_AcaHar_G4.jpg","images2/146_H_AcaHar_G4.jpg","images2/147_H_AcaHar_G4.jpg","images2/148_H_AcaHar_G4.jpg","images2/149_H_AcaHar_G4.jpg","images2/150_H_AcaHar_G4.jpg"]
G5M = ["images2/091_M_AmyMiq_G5.jpg","images2/092_M_AmyMiq_G5.jpg","images2/093_M_AmyMiq_G5.jpg","images2/094_M_AmyMiq_G5.jpg","images2/095_M_AmyMiq_G5.jpg","images2/096_M_AmyMiq_G5.jpg","images2/097_M_AmyMiq_G5.jpg","images2/098_M_AmyMiq_G5.jpg","images2/099_M_AmyMiq_G5.jpg","images2/100_M_AmyMiq_G5.jpg","images2/101_M_AmyMiq_G5.jpg","images2/102_M_AmyMiq_G5.jpg","images2/103_M_AmyMiq_G5.jpg","images2/104_M_AmyMiq_G5.jpg","images2/105_M_AmyMiq_G5.jpg"]
G5H = ["images2/106_H_EucMin_G5.jpg","images2/107_H_EucMin_G5.jpg","images2/108_H_EucMin_G5.jpg","images2/109_H_EucMin_G5.jpg","images2/110_H_EucMin_G5.jpg","images2/111_H_EucMin_G5.jpg","images2/112_H_EucMin_G5.jpg","images2/113_H_EucMin_G5.jpg","images2/114_H_EucMin_G5.jpg","images2/115_H_EucMin_G5.jpg","images2/116_H_EucMin_G5.jpg","images2/117_H_EucMin_G5.jpg","images2/118_H_EucMin_G5.jpg","images2/119_H_EucMin_G5.jpg","images2/120_H_EucMin_G5.jpg"]
G6M = ["images2/151_M_AmyMir_G6.jpg","images2/152_M_AmyMir_G6.jpg","images2/153_M_AmyMir_G6.jpg","images2/154_M_AmyMir_G6.jpg","images2/155_M_AmyMir_G6.jpg","images2/156_M_AmyMir_G6.jpg","images2/157_M_AmyMir_G6.jpg","images2/158_M_AmyMir_G6.jpg","images2/159_M_AmyMir_G6.jpg","images2/160_M_AmyMir_G6.jpg","images2/161_M_AmyMir_G6.jpg","images2/162_M_AmyMir_G6.jpg","images2/163_M_AmyMir_G6.jpg","images2/164_M_AmyMir_G6.jpg","images2/165_M_AmyMir_G6.jpg"]
G6H = ["images2/166_H_EreLon_G6.jpg","images2/167_H_EreLon_G6.jpg","images2/168_H_EreLon_G6.jpg","images2/169_H_EreLon_G6.jpg","images2/170_H_EreLon_G6.jpg","images2/171_H_EreLon_G6.jpg","images2/172_H_EreLon_G6.jpg","images2/173_H_EreLon_G6.jpg","images2/174_H_EreLon_G6.jpg","images2/175_H_EreLon_G6.jpg","images2/176_H_EreLon_G6.jpg","images2/177_H_EreLon_G6.jpg","images2/178_H_EreLon_G6.jpg","images2/179_H_EreLon_G6.jpg","images2/180_H_EreLon_G6.jpg"]
G7M = ["images2/181_M_AmyMir_G7.jpg","images2/182_M_AmyMir_G7.jpg","images2/183_M_AmyMir_G7.jpg","images2/184_M_AmyMir_G7.jpg","images2/185_M_AmyMir_G7.jpg","images2/186_M_AmyMir_G7.jpg","images2/187_M_AmyMir_G7.jpg","images2/188_M_AmyMir_G7.jpg","images2/189_M_AmyMir_G7.jpg","images2/190_M_AmyMir_G7.jpg","images2/191_M_AmyMir_G7.jpg","images2/192_M_AmyMir_G7.jpg","images2/193_M_AmyMir_G7.jpg","images2/194_M_AmyMir_G7.jpg","images2/195_M_AmyMir_G7.jpg"]
G7H = ["images2/196_H_EreMit_G7.jpg","images2/197_H_EreMit_G7.jpg","images2/198_H_EreMit_G7.jpg","images2/199_H_EreMit_G7.jpg","images2/200_H_EreMit_G7.jpg","images2/201_H_EreMit_G7.jpg","images2/202_H_EreMit_G7.jpg","images2/203_H_EreMit_G7.jpg","images2/204_H_EreMit_G7.jpg","images2/205_H_EreMit_G7.jpg","images2/206_H_EreMit_G7.jpg","images2/207_H_EreMit_G7.jpg","images2/208_H_EreMit_G7.jpg","images2/209_H_EreMit_G7.jpg","images2/210_H_EreMit_G7.jpg"]
G8M = ["images2/271_M_AmyMir_G8.jpg","images2/272_M_AmyMir_G8.jpg","images2/273_M_AmyMir_G8.jpg","images2/274_M_AmyMir_G8.jpg","images2/275_M_AmyMir_G8.jpg","images2/276_M_AmyMir_G8.jpg","images2/277_M_AmyMir_G8.jpg","images2/278_M_AmyMir_G8.jpg","images2/279_M_AmyMir_G8.jpg","images2/280_M_AmyMir_G8.jpg","images2/281_M_AmyMir_G8.jpg","images2/282_M_AmyMir_G8.jpg","images2/283_M_AmyMir_G8.jpg","images2/284_M_AmyMir_G8.jpg","images2/285_M_AmyMir_G8.jpg"]
G8H = ["images2/286_H_MyoPla_G8.jpg","images2/287_H_MyoPla_G8.jpg","images2/288_H_MyoPla_G8.jpg","images2/289_H_MyoPla_G8.jpg","images2/290_H_MyoPla_G8.jpg","images2/291_H_MyoPla_G8.jpg","images2/292_H_MyoPla_G8.jpg","images2/293_H_MyoPla_G8.jpg","images2/294_H_MyoPla_G8.jpg","images2/295_H_MyoPla_G8.jpg","images2/296_H_MyoPla_G8.jpg","images2/297_H_MyoPla_G8.jpg","images2/298_H_MyoPla_G8.jpg","images2/299_H_MyoPla_G8.jpg","images2/300_H_MyoPla_G8.jpg"]
G9M = ["images2/301_M_Amypre_G9.jpg","images2/302_M_Amypre_G9.jpg","images2/303_M_Amypre_G9.jpg","images2/304_M_Amypre_G9.jpg","images2/305_M_Amypre_G9.jpg","images2/306_M_Amypre_G9.jpg","images2/307_M_Amypre_G9.jpg","images2/308_M_Amypre_G9.jpg","images2/309_M_Amypre_G9.jpg","images2/310_M_Amypre_G9.jpg","images2/311_M_Amypre_G9.jpg","images2/312_M_Amypre_G9.jpg","images2/313_M_Amypre_G9.jpg","images2/314_M_Amypre_G9.jpg","images2/315_M_Amypre_G9.jpg"]
G9H = ["images2/316_H_AcaAne_G9.jpg","images2/317_H_AcaAne_G9.jpg","images2/318_H_AcaAne_G9.jpg","images2/319_H_AcaAne_G9.jpg","images2/320_H_AcaAne_G9.jpg","images2/321_H_AcaAne_G9.jpg","images2/322_H_AcaAne_G9.jpg","images2/323_H_AcaAne_G9.jpg","images2/324_H_AcaAne_G9.jpg","images2/325_H_AcaAne_G9.jpg","images2/326_H_AcaAne_G9.jpg","images2/327_H_AcaAne_G9.jpg","images2/328_H_AcaAne_G9.jpg","images2/329_H_AcaAne_G9.jpg","images2/330_H_AcaAne_G9.jpg"]
G10M = ["images2/571_M_AmyPre_G10.jpg","images2/572_M_AmyPre_G10.jpg","images2/573_M_AmyPre_G10.jpg","images2/574_M_AmyPre_G10.jpg","images2/575_M_AmyPre_G10.jpg","images2/576_M_AmyPre_G10.jpg","images2/577_M_AmyPre_G10.jpg","images2/578_M_AmyPre_G10.jpg","images2/579_M_AmyPre_G10.jpg","images2/580_M_AmyPre_G10.jpg","images2/581_M_AmyPre_G10.jpg","images2/582_M_AmyPre_G10.jpg","images2/583_M_AmyPre_G10.jpg","images2/584_M_AmyPre_G10.jpg","images2/585_M_AmyPre_G10.jpg"]
G10H = ["images2/586_H_FliMac_G10.jpg","images2/587_H_FliMac_G10.jpg","images2/588_H_FliMac_G10.jpg","images2/589_H_FliMac_G10.jpg","images2/590_H_FliMac_G10.jpg","images2/591_H_FliMac_G10.jpg","images2/592_H_FliMac_G10.jpg","images2/593_H_FliMac_G10.jpg","images2/594_H_FliMac_G10.jpg","images2/595_H_FliMac_G10.jpg","images2/596_H_FliMac_G10.jpg","images2/597_H_FliMac_G10.jpg","images2/598_H_FliMac_G10.jpg","images2/599_H_FliMac_G10.jpg","images2/600_H_FliMac_G10.jpg"]
G11M = ["images2/331_M_AmyPre_G11.jpg","images2/332_M_AmyPre_G11.jpg","images2/333_M_AmyPre_G11.jpg","images2/334_M_AmyPre_G11.jpg","images2/335_M_AmyPre_G11.jpg","images2/336_M_AmyPre_G11.jpg","images2/337_M_AmyPre_G11.jpg","images2/338_M_AmyPre_G11.jpg","images2/339_M_AmyPre_G11.jpg","images2/340_M_AmyPre_G11.jpg","images2/341_M_AmyPre_G11.jpg","images2/342_M_AmyPre_G11.jpg","images2/343_M_AmyPre_G11.jpg","images2/344_M_AmyPre_G11.jpg","images2/345_M_AmyPre_G11.jpg"]
G11H = ["images2/346_H_SenEre_G11.jpg","images2/347_H_SenEre_G11.jpg","images2/348_H_SenEre_G11.jpg","images2/349_H_SenEre_G11.jpg","images2/350_H_SenEre_G11.jpg","images2/351_H_SenEre_G11.jpg","images2/352_H_SenEre_G11.jpg","images2/353_H_SenEre_G11.jpg","images2/354_H_SenEre_G11.jpg","images2/355_H_SenEre_G11.jpg","images2/356_H_SenEre_G11.jpg","images2/357_H_SenEre_G11.jpg","images2/358_H_SenEre_G11.jpg","images2/359_H_SenEre_G11.jpg","images2/360_H_SenEre_G11.jpg"]
G12M = ["images2/631_M_AmySan_G12.jpg","images2/632_M_AmySan_G12.jpg","images2/633_M_AmySan_G12.jpg","images2/634_M_AmySan_G12.jpg","images2/635_M_AmySan_G12.jpg","images2/636_M_AmySan_G12.jpg","images2/637_M_AmySan_G12.jpg","images2/638_M_AmySan_G12.jpg","images2/639_M_AmySan_G12.jpg","images2/640_M_AmySan_G12.jpg","images2/641_M_AmySan_G12.jpg","images2/642_M_AmySan_G12.jpg","images2/643_M_AmySan_G12.jpg","images2/644_M_AmySan_G12.jpg","images2/645_M_AmySan_G12.jpg"]
G12H = ["images2/646_H_CorBle_G12.jpg","images2/647_H_CorBle_G12.jpg","images2/648_H_CorBle_G12.jpg","images2/649_H_CorBle_G12.jpg","images2/650_H_CorBle_G12.jpg","images2/651_H_CorBle_G12.jpg","images2/652_H_CorBle_G12.jpg","images2/653_H_CorBle_G12.jpg","images2/654_H_CorBle_G12.jpg","images2/655_H_CorBle_G12.jpg","images2/656_H_CorBle_G12.jpg","images2/657_H_CorBle_G12.jpg","images2/658_H_CorBle_G12.jpg","images2/659_H_CorBle_G12.jpg","images2/670_H_CorBle_G12.jpg"]
G13M = ["images2/661_M_AmySan_G13.jpg","images2/662_M_AmySan_G13.jpg","images2/663_M_AmySan_G13.jpg","images2/664_M_AmySan_G13.jpg","images2/665_M_AmySan_G13.jpg","images2/666_M_AmySan_G13.jpg","images2/667_M_AmySan_G13.jpg","images2/668_M_AmySan_G13.jpg","images2/669_M_AmySan_G13.jpg","images2/670_M_AmySan_G13.jpg","images2/671_M_AmySan_G13.jpg","images2/672_M_AmySan_G13.jpg","images2/673_M_AmySan_G13.jpg","images2/674_M_AmySan_G13.jpg","images2/675_M_AmySan_G13.jpg"]
G13H = ["images2/676_H_CorPor_G13.jpg","images2/677_H_CorPor_G13.jpg","images2/678_H_CorPor_G13.jpg","images2/679_H_CorPor_G13.jpg","images2/680_H_CorPor_G13.jpg","images2/681_H_CorPor_G13.jpg","images2/682_H_CorPor_G13.jpg","images2/683_H_CorPor_G13.jpg","images2/684_H_CorPor_G13.jpg","images2/685_H_CorPor_G13.jpg","images2/686_H_CorPor_G13.jpg","images2/687_H_CorPor_G13.jpg","images2/688_H_CorPor_G13.jpg","images2/689_H_CorPor_G13.jpg","images2/690_H_CorPor_G13.jpg"]
G14M = ["images2/421_M_AmySan_G14.jpg","images2/422_M_AmySan_G14.jpg","images2/423_M_AmySan_G14.jpg","images2/424_M_AmySan_G14.jpg","images2/425_M_AmySan_G14.jpg","images2/426_M_AmySan_G14.jpg","images2/427_M_AmySan_G14.jpg","images2/428_M_AmySan_G14.jpg","images2/429_M_AmySan_G14.jpg","images2/430_M_AmySan_G14.jpg","images2/431_M_AmySan_G14.jpg","images2/432_M_AmySan_G14.jpg","images2/433_M_AmySan_G14.jpg","images2/434_M_AmySan_G14.jpg","images2/435_M_AmySan_G14.jpg"]
G14H = ["images2/436_H_EucMin_G14.jpg","images2/437_H_EucMin_G14.jpg","images2/438_H_EucMin_G14.jpg","images2/439_H_EucMin_G14.jpg","images2/440_H_EucMin_G14.jpg","images2/441_H_EucMin_G14.jpg","images2/442_H_EucMin_G14.jpg","images2/443_H_EucMin_G14.jpg","images2/444_H_EucMin_G14.jpg","images2/445_H_EucMin_G14.jpg","images2/446_H_EucMin_G14.jpg","images2/447_H_EucMin_G14.jpg","images2/448_H_EucMin_G14.jpg","images2/449_H_EucMin_G14.jpg","images2/450_H_EucMin_G14.jpg"]
G15M = ["images2/691_M_AmySan_G15.jpg","images2/692_M_AmySan_G15.jpg","images2/693_M_AmySan_G15.jpg","images2/694_M_AmySan_G15.jpg","images2/695_M_AmySan_G15.jpg","images2/696_M_AmySan_G15.jpg","images2/697_M_AmySan_G15.jpg","images2/698_M_AmySan_G15.jpg","images2/699_M_AmySan_G15.jpg","images2/700_M_AmySan_G15.jpg","images2/701_M_AmySan_G15.jpg","images2/702_M_AmySan_G15.jpg","images2/703_M_AmySan_G15.jpg","images2/704_M_AmySan_G15.jpg","images2/705_M_AmySan_G15.jpg"]
G15H = ["images2/706_H_EucTet_G15.jpg","images2/707_H_EucTet_G15.jpg","images2/708_H_EucTet_G15.jpg","images2/709_H_EucTet_G15.jpg","images2/710_H_EucTet_G15.jpg","images2/711_H_EucTet_G15.jpg","images2/712_H_EucTet_G15.jpg","images2/713_H_EucTet_G15.jpg","images2/714_H_EucTet_G15.jpg","images2/715_H_EucTet_G15.jpg","images2/716_H_EucTet_G15.jpg","images2/717_H_EucTet_G15.jpg","images2/718_H_EucTet_G15.jpg","images2/719_H_EucTet_G15.jpg","images2/720_H_EucTet_G15.jpg"]
G16M = ["images2/511_M_DecSig_G16.jpg","images2/512_M_DecSig_G16.jpg","images2/513_M_DecSig_G16.jpg","images2/514_M_DecSig_G16.jpg","images2/515_M_DecSig_G16.jpg","images2/516_M_DecSig_G16.jpg","images2/517_M_DecSig_G16.jpg","images2/518_M_DecSig_G16.jpg","images2/519_M_DecSig_G16.jpg","images2/520_M_DecSig_G16.jpg","images2/521_M_DecSig_G16.jpg","images2/522_M_DecSig_G16.jpg","images2/523_M_DecSig_G16.jpg","images2/524_M_DecSig_G16.jpg","images2/525_M_DecSig_G16.jpg"]
G16H = ["images2/526_H_XanPar_G16.jpg","images2/527_H_XanPar_G16.jpg","images2/528_H_XanPar_G16.jpg","images2/529_H_XanPar_G16.jpg","images2/530_H_XanPar_G16.jpg","images2/531_H_XanPar_G16.jpg","images2/532_H_XanPar_G16.jpg","images2/533_H_XanPar_G16.jpg","images2/534_H_XanPar_G16.jpg","images2/535_H_XanPar_G16.jpg","images2/536_H_XanPar_G16.jpg","images2/537_H_XanPar_G16.jpg","images2/538_H_XanPar_G16.jpg","images2/539_H_XanPar_G16.jpg","images2/540_H_XanPar_G16.jpg"]
G17M = ["images2/391_M_DenOdo_G17.jpg","images2/392_M_DenOdo_G17.jpg","images2/393_M_DenOdo_G17.jpg","images2/394_M_DenOdo_G17.jpg","images2/395_M_DenOdo_G17.jpg","images2/396_M_DenOdo_G17.jpg","images2/397_M_DenOdo_G17.jpg","images2/398_M_DenOdo_G17.jpg","images2/399_M_DenOdo_G17.jpg","images2/400_M_DenOdo_G17.jpg","images2/401_M_DenOdo_G17.jpg","images2/402_M_DenOdo_G17.jpg","images2/403_M_DenOdo_G17.jpg","images2/404_M_DenOdo_G17.jpg","images2/405_M_DenOdo_G17.jpg"]
G17H = ["images2/406_H_GrePte_G17.jpg","images2/407_H_GrePte_G17.jpg","images2/408_H_GrePte_G17.jpg","images2/409_H_GrePte_G17.jpg","images2/410_H_GrePte_G17.jpg","images2/411_H_GrePte_G17.jpg","images2/412_H_GrePte_G17.jpg","images2/413_H_GrePte_G17.jpg","images2/414_H_GrePte_G17.jpg","images2/415_H_GrePte_G17.jpg","images2/416_H_GrePte_G17.jpg","images2/417_H_GrePte_G17.jpg","images2/418_H_GrePte_G17.jpg","images2/419_H_GrePte_G17.jpg","images2/420_H_GrePte_G17.jpg"]
G18M = ["images2/211_M_DenVit_G18.jpg","images2/212_M_DenVit_G18.jpg","images2/213_M_DenVit_G18.jpg","images2/214_M_DenVit_G18.jpg","images2/215_M_DenVit_G18.jpg","images2/216_M_DenVit_G18.jpg","images2/217_M_DenVit_G18.jpg","images2/218_M_DenVit_G18.jpg","images2/219_M_DenVit_G18.jpg","images2/220_M_DenVit_G18.jpg","images2/221_M_DenVit_G18.jpg","images2/222_M_DenVit_G18.jpg","images2/223_M_DenVit_G18.jpg","images2/224_M_DenVit_G18.jpg","images2/225_M_DenVit_G18.jpg"]
G18H = ["images2/226_H_AngCos_G18.jpg","images2/227_H_AngCos_G18.jpg","images2/228_H_AngCos_G18.jpg","images2/229_H_AngCos_G18.jpg","images2/230_H_AngCos_G18.jpg","images2/231_H_AngCos_G18.jpg","images2/232_H_AngCos_G18.jpg","images2/233_H_AngCos_G18.jpg","images2/234_H_AngCos_G18.jpg","images2/235_H_AngCos_G18.jpg","images2/236_H_AngCos_G18.jpg","images2/237_H_AngCos_G18.jpg","images2/238_H_AngCos_G18.jpg","images2/239_H_AngCos_G18.jpg","images2/240_H_AngCos_G18.jpg"]
G19M = ["images2/451_M_DenVit_G19.jpg","images2/452_M_DenVit_G19.jpg","images2/453_M_DenVit_G19.jpg","images2/454_M_DenVit_G19.jpg","images2/455_M_DenVit_G19.jpg","images2/456_M_DenVit_G19.jpg","images2/457_M_DenVit_G19.jpg","images2/458_M_DenVit_G19.jpg","images2/459_M_DenVit_G19.jpg","images2/460_M_DenVit_G19.jpg","images2/461_M_DenVit_G19.jpg","images2/462_M_DenVit_G19.jpg","images2/463_M_DenVit_G19.jpg","images2/464_M_DenVit_G19.jpg","images2/465_M_DenVit_G19.jpg"]
G19H = ["images2/466_H_EucSp2_G19.jpg","images2/467_H_EucSp2_G19.jpg","images2/468_H_EucSp2_G19.jpg","images2/469_H_EucSp2_G19.jpg","images2/470_H_EucSp2_G19.jpg","images2/471_H_EucSp2_G19.jpg","images2/472_H_EucSp2_G19.jpg","images2/473_H_EucSp2_G19.jpg","images2/474_H_EucSp2_G19.jpg","images2/475_H_EucSp2_G19.jpg","images2/476_H_EucSp2_G19.jpg","images2/477_H_EucSp2_G19.jpg","images2/478_H_EucSp2_G19.jpg","images2/479_H_EucSp2_G19.jpg","images2/480_H_EucSp2_G19.jpg"]
G20M = ["images2/541_M_LysExo_G20.jpg","images2/542_M_LysExo_G20.jpg","images2/543_M_LysExo_G20.jpg","images2/544_M_LysExo_G20.jpg","images2/545_M_LysExo_G20.jpg","images2/546_M_LysExo_G20.jpg","images2/547_M_LysExo_G20.jpg","images2/548_M_LysExo_G20.jpg","images2/549_M_LysExo_G20.jpg","images2/550_M_LysExo_G20.jpg","images2/551_M_LysExo_G20.jpg","images2/552_M_LysExo_G20.jpg","images2/553_M_LysExo_G20.jpg","images2/554_M_LysExo_G20.jpg","images2/555_M_LysExo_G20.jpg","images2/565_M_AcaAne_G20.jpg","images2/566_M_AcaAne_G20.jpg","images2/567_M_AcaAne_G20.jpg","images2/568_M_AcaAne_G20.jpg","images2/569_M_AcaAne_G20.jpg","images2/570_M_AcaAne_G20.jpg"]
G20H = ["images2/556_H_AcaAne_G20.jpg","images2/557_H_AcaAne_G20.jpg","images2/558_H_AcaAne_G20.jpg","images2/559_H_AcaAne_G20.jpg","images2/560_H_AcaAne_G20.jpg","images2/561_H_AcaAne_G20.jpg","images2/562_H_AcaAne_G20.jpg","images2/563_H_AcaAne_G20.jpg","images2/564_H_AcaAne_G20.jpg"]
G21M = ["images2/721_M_LysExo_G21.jpg","images2/722_M_LysExo_G21.jpg","images2/723_M_LysExo_G21.jpg","images2/724_M_LysExo_G21.jpg","images2/725_M_LysExo_G21.jpg","images2/726_M_LysExo_G21.jpg","images2/727_M_LysExo_G21.jpg","images2/728_M_LysExo_G21.jpg","images2/729_M_LysExo_G21.jpg","images2/730_M_LysExo_G21.jpg","images2/731_M_LysExo_G21.jpg","images2/732_M_LysExo_G21.jpg","images2/733_M_LysExo_G21.jpg","images2/734_M_LysExo_G21.jpg","images2/735_M_LysExo_G21.jpg"]
G21H = ["images2/736_H_AleOle_G21.jpg","images2/737_H_AleOle_G21.jpg","images2/738_H_AleOle_G21.jpg","images2/739_H_AleOle_G21.jpg","images2/740_H_AleOle_G21.jpg","images2/741_H_AleOle_G21.jpg","images2/742_H_AleOle_G21.jpg","images2/743_H_AleOle_G21.jpg","images2/744_H_AleOle_G21.jpg","images2/745_H_AleOle_G21.jpg","images2/746_H_AleOle_G21.jpg","images2/747_H_AleOle_G21.jpg","images2/748_H_AleOle_G21.jpg","images2/749_H_AleOle_G21.jpg","images2/750_H_AleOle_G21.jpg"]
G22M = ["images2/601_M_LysLin_G22.jpg","images2/602_M_LysLin_G22.jpg","images2/603_M_LysLin_G22.jpg","images2/604_M_LysLin_G22.jpg","images2/605_M_LysLin_G22.jpg","images2/606_M_LysLin_G22.jpg","images2/607_M_LysLin_G22.jpg","images2/608_M_LysLin_G22.jpg","images2/609_M_LysLin_G22.jpg","images2/610_M_LysLin_G22.jpg","images2/611_M_LysLin_G22.jpg","images2/612_M_LysLin_G22.jpg","images2/613_M_LysLin_G22.jpg","images2/614_M_LysLin_G22.jpg","images2/615_M_LysLin_G22.jpg"]
G22H = ["images2/616_H_EreMit_G22.jpg","images2/617_H_EreMit_G22.jpg","images2/618_H_EreMit_G22.jpg","images2/619_H_EreMit_G22.jpg","images2/620_H_EreMit_G22.jpg","images2/621_H_EreMit_G22.jpg","images2/622_H_EreMit_G22.jpg","images2/623_H_EreMit_G22.jpg","images2/624_H_EreMit_G22.jpg","images2/625_H_EreMit_G22.jpg","images2/626_H_EreMit_G22.jpg","images2/627_H_EreMit_G22.jpg","images2/628_H_EreMit_G22.jpg","images2/629_H_EreMit_G22.jpg","images2/630_H_EreMit_G22.jpg"]
G23M = ["images2/241_M_MueEuc_G23.jpg","images2/242_M_MueEuc_G23.jpg","images2/243_M_MueEuc_G23.jpg","images2/244_M_MueEuc_G23.jpg","images2/245_M_MueEuc_G23.jpg","images2/246_M_MueEuc_G23.jpg","images2/247_M_MueEuc_G23.jpg","images2/248_M_MueEuc_G23.jpg","images2/249_M_MueEuc_G23.jpg","images2/250_M_MueEuc_G23.jpg","images2/251_M_MueEuc_G23.jpg","images2/252_M_MueEuc_G23.jpg","images2/253_M_MueEuc_G23.jpg","images2/254_M_MueEuc_G23.jpg","images2/255_M_MueEuc_G23.jpg"]
G23H = ["images2/256_H_EucHem_G23.jpg","images2/257_H_EucHem_G23.jpg","images2/258_H_EucHem_G23.jpg","images2/259_H_EucHem_G23.jpg","images2/260_H_EucHem_G23.jpg","images2/261_H_EucHem_G23.jpg","images2/262_H_EucHem_G23.jpg","images2/263_H_EucHem_G23.jpg","images2/264_H_EucHem_G23.jpg","images2/265_H_EucHem_G23.jpg","images2/266_H_EucHem_G23.jpg","images2/267_H_EucHem_G23.jpg","images2/268_H_EucHem_G23.jpg","images2/269_H_EucHem_G23.jpg","images2/270_H_EucHem_G23.jpg"]
G24M = ["images2/361_M_MueEuc_G24.jpg","images2/362_M_MueEuc_G24.jpg","images2/363_M_MueEuc_G24.jpg","images2/364_M_MueEuc_G24.jpg","images2/365_M_MueEuc_G24.jpg","images2/366_M_MueEuc_G24.jpg","images2/367_M_MueEuc_G24.jpg","images2/368_M_MueEuc_G24.jpg","images2/369_M_MueEuc_G24.jpg","images2/370_M_MueEuc_G24.jpg","images2/371_M_MueEuc_G24.jpg","images2/372_M_MueEuc_G24.jpg","images2/373_M_MueEuc_G24.jpg","images2/374_M_MueEuc_G24.jpg","images2/375_M_MueEuc_G24.jpg"]
G24H = ["images2/376_H_EucMol_G24.jpg","images2/377_H_EucMol_G24.jpg","images2/378_H_EucMol_G24.jpg","images2/379_H_EucMol_G24.jpg","images2/380_H_EucMol_G24.jpg","images2/381_H_EucMol_G24.jpg","images2/382_H_EucMol_G24.jpg","images2/383_H_EucMol_G24.jpg","images2/384_H_EucMol_G24.jpg","images2/385_H_EucMol_G24.jpg","images2/386_H_EucMol_G24.jpg","images2/387_H_EucMol_G24.jpg","images2/388_H_EucMol_G24.jpg","images2/389_H_EucMol_G24.jpg","images2/390_H_EucMol_G24.jpg"]
G25M = ["images2/481_M_MueEuc_G25.jpg","images2/482_M_MueEuc_G25.jpg","images2/483_M_MueEuc_G25.jpg","images2/484_M_MueEuc_G25.jpg","images2/485_M_MueEuc_G25.jpg","images2/486_M_MueEuc_G25.jpg","images2/487_M_MueEuc_G25.jpg","images2/488_M_MueEuc_G25.jpg","images2/489_M_MueEuc_G25.jpg","images2/490_M_MueEuc_G25.jpg","images2/491_M_MueEuc_G25.jpg","images2/492_M_MueEuc_G25.jpg","images2/493_M_MueEuc_G25.jpg","images2/494_M_MueEuc_G25.jpg","images2/495_M_MueEuc_G25.jpg"]
G25H = ["images2/496_H_EucSp3_G25.jpg","images2/497_H_EucSp3_G25.jpg","images2/498_H_EucSp3_G25.jpg","images2/499_H_EucSp3_G25.jpg","images2/500_H_EucSp3_G25.jpg","images2/501_H_EucSp3_G25.jpg","images2/502_H_EucSp3_G25.jpg","images2/503_H_EucSp3_G25.jpg","images2/504_H_EucSp3_G25.jpg","images2/505_H_EucSp3_G25.jpg","images2/506_H_EucSp3_G25.jpg","images2/507_H_EucSp3_G25.jpg","images2/508_H_EucSp3_G25.jpg","images2/509_H_EucSp3_G25.jpg","images2/510_H_EucSp3_G25.jpg"]


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

photoTimeout = 20000;
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

